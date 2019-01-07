// type react properties
import PropTypes from 'prop-types'
import LandingPage from '../src/views/LandingPage/LandingPage.jsx'
import Head from 'next/head'

const Landing = (props) => {
  return (
    <>
      <Head />
      <LandingPage userState={props.userState} />
    </>
  )
}
Landing.propTypes = {
  userState: PropTypes.object,
}
export default Landing
