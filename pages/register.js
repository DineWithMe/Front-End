import { Component } from 'react'
import SignUpPage from '../src/views/SignUpPage/SignupPage.jsx'
import Head from 'next/head'
import redirectIndex from '../src/utils/redirectIndex.js'
class SignUp extends Component {
  static async getInitialProps(ctx) {
    await redirectIndex(ctx)
    return {}
  }
  render() {
    return (
      <>
        <Head />
        <SignUpPage />
      </>
    )
  }
}

export default SignUp
