// type react properties
import PropTypes from 'prop-types'
import LandingPage from '../src/views/LandingPage/LandingPage.jsx'
import Head from 'next/head'
import { Fragment } from 'react'

const Landing = (props) => {
  return (
    <Fragment>
      <Head />
      <LandingPage userState={props.userState} />
    </Fragment>
  )
}
Landing.propTypes = {
  userState: PropTypes.object,
}
export default Landing
