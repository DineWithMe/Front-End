import AboutUsPage from '../vendor/views/AboutUsPage/AboutUsPage'
import Head from 'next/head'
import { Fragment } from 'react'

const Index = () => {
  return (
    <Fragment>
      <Head>
        <link
          rel='stylesheet'
          href='//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
        />
      </Head>
      <AboutUsPage />
    </Fragment>
  )
}

export default Index
