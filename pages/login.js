import { Component } from 'react'
import SignInPage from '../src/views/SignInPage/SignInPage'
import Head from 'next/head'
import redirectIndex from '../src/utils/redirectIndex.js'

class SignIn extends Component {
  static async getInitialProps(ctx) {
    await redirectIndex(ctx)
    return {}
  }
  render() {
    return (
      <>
        <Head />
        <SignInPage />
      </>
    )
  }
}

export default SignIn
