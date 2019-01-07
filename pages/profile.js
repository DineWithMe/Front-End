import { Component } from 'react'
import ProfilePage from '../src/views/ProfilePage/ProfilePage'
import Head from 'next/head'
import redirectIndex from '../src/utils/redirectIndex.js'

class Profile extends Component {
  static async getInitialProps(ctx) {
    await redirectIndex(ctx, true)
    return {}
  }

  render() {
    return (
      <>
        <Head />
        <ProfilePage />
      </>
    )
  }
}

export default Profile
