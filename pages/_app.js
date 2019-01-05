import App, { Container } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import getConfig from 'next/config'
// client
import { ApolloProvider } from 'react-apollo'
import withApolloUnstated from '../src/utils/withApolloUnstated'
// state
import { Provider } from 'unstated'
// jss
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../src/utils/getPageContext'
// css
import '../src/scss/material-kit-pro-react.css'
import '../src/scss/nprogress.css'
// progress bar
import NProgress from 'nprogress'
// fetch api ponyfill
import 'isomorphic-unfetch'

const { publicRuntimeConfig } = getConfig()

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  // get initial props run first before constructor
  static async getInitialProps() {}
  constructor(props) {
    super(props)
    this.pageContext = getPageContext()
  }
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
    // run service worker in prod environment and check if service worker supported in browser
    if (publicRuntimeConfig.service_worker && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        // eslint-disable-next-line no-unused-vars
        .then((registration) => {
          // eslint-disable-next-line no-console
          console.log('service worker registration successful')
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render() {
    const {
      props: { Component, pageProps, apolloClient, userStateStore },
      pageContext,
    } = this

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider inject={[userStateStore]}>
            <Head>
              <title>{`Dine With Me`}</title>
            </Head>
            {/* Wrap every page in Jss and Theme providers */}
            <JssProvider
              registry={pageContext.sheetsRegistry}
              generateClassName={pageContext.generateClassName}
            >
              {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
              <MuiThemeProvider
                theme={pageContext.theme}
                sheetsManager={pageContext.sheetsManager}
              >
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
                <Component pageContext={pageContext} {...pageProps} />
              </MuiThemeProvider>
            </JssProvider>
          </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloUnstated(MyApp)
