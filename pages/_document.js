import React from 'react'
import PropTypes from 'prop-types'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

class MyDocument extends Document {
  render() {
    return (
      <html lang='en' dir='ltr'>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='minimum-scale=1,width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='../static/public/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='../static/public/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='../static/public/favicon-16x16.png'
          />
          {/* site.webmanifest provides metadata used when your web app is added to the
      home screen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/ */}
          <link rel='manifest' href='../static/public/site.webmanifest' />
          <link
            rel='mask-icon'
            href='../static/public/safari-pinned-tab.svg'
            color='#5bbad5'
          />
          <meta name='apple-mobile-web-app-title' content='Dine With Me' />
          <meta name='application-name' content='Dine With Me' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons'
          />
          <link
            href='https://use.fontawesome.com/releases/v5.0.10/css/all.css'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext
  const page = ctx.renderPage((Component) => {
    const WrappedComponent = (props) => {
      pageContext = props.pageContext
      return <Component {...props} />
    }

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired,
    }

    return WrappedComponent
  })

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id='jss-server-side'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: pageContext.sheetsRegistry.toString(),
          }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  }
}

export default MyDocument
