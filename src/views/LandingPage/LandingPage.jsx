import React from 'react'
// type react properties
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import Button from '../../components/CustomButtons/Button.jsx'
import Parallax from '../../components/Parallax/Parallax.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'
// style
import landingPageStyle from '../../jss/material-kit-pro-react/views/landingPageStyle.jsx'
// Sections for this page
import SectionProduct from './Sections/SectionProduct.jsx'
import SectionTeam from './Sections/SectionTeam.jsx'
import SectionWork from './Sections/SectionWork.jsx'
import CustomFooter from '../../components/Footer/CustomFooter.jsx'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
  render() {
    const { classes, userState } = this.props
    return (
      <div>
        <Navbar userState={userState} />
        <Parallax image={require('../../../static/img/bg8.jpg')} filter='dark'>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  {`Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.`}
                </h4>
                <br />
                <Button
                  color='danger'
                  size='lg'
                  href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fas fa-play' />
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionProduct />
            <SectionTeam />
            <SectionWork />
          </div>
        </div>
        <CustomFooter classes={classes} />
      </div>
    )
  }
}
LandingPage.propTypes = {
  classes: PropTypes.object,
  userState: PropTypes.object,
}

export default withStyles(landingPageStyle)(LandingPage)
