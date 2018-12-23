import React, { Fragment } from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// @material-ui/icons
import Timeline from '@material-ui/icons/Timeline'
import Code from '@material-ui/icons/Code'
import Group from '@material-ui/icons/Group'
import Check from '@material-ui/icons/Check'
// style
import signupPageStyle from '../../jss/material-kit-pro-react/views/signupPageStyle.jsx'
import styles from '../../jss/material-kit-pro-react/views/componentsSections/preFooter.jsx'
// constant
import { USERNAME, EMAIL, PASSWORD, NEUTRAL } from '../../utils/constants'
// image
import image from '../../../static/img/bg7.jpg'
// core components
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import Button from '../../components/CustomButtons/Button.jsx'
import Card from '../../components/Card/Card.jsx'
import CardBody from '../../components/Card/CardBody.jsx'
import InfoArea from '../../components/InfoArea/InfoArea.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'
import CustomFooter from '../../components/Footer/CustomFooter.jsx'
import SignUpButton from '../../components/CustomButtons/SignUpButton.jsx'
import UsernameInput from '../../components/CustomInput/UsernameInput.jsx'
import EmailInput from '../../components/CustomInput/EmailInput.jsx'
import PasswordInput from '../../components/CustomInput/PasswordInput.jsx'

class Components extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [1],
      registrationData: {
        [USERNAME]: { value: '', flag: NEUTRAL },
        [EMAIL]: { value: '', flag: NEUTRAL },
        [PASSWORD]: { value: '', flag: NEUTRAL },
      },
      flag: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle(value) {
    const { checked } = this.state
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({
      checked: newChecked,
    })
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
  onSignUpSuccess = () => {
    this.setState({ flag: true })
  }
  updateRegistrationData = (property, value, flag) => {
    this.setState(
      {
        registrationData: {
          ...this.state.registrationData,
          [property]: { value, flag },
        },
      }
      // another way to write it https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react
      // (state) => ((state.registrationData[property] = { value, flag }), state)
    )
  }

  render() {
    const {
      props: { classes, ...rest },
      state: { checked, registrationData, flag },
      onSignUpSuccess,
      handleToggle,
      updateRegistrationData,
    } = this
    return (
      <Fragment>
        <Navbar {...rest} />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: 'url(' + image + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  {flag ? (
                    <CardBody>
                      <GridContainer justify='center'>
                        <GridItem xs={12} sm={5} md={5}>
                          <div style={styles.textCenter}>
                            <h3
                              style={{
                                ...styles.title,
                                textAlign: 'center',
                              }}
                            >
                              One last step!
                            </h3>
                            <p
                              style={{
                                ...styles.description,
                                textAlign: 'center',
                              }}
                            >
                              You are almost, please head to{' '}
                              <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href={`https://${
                                  registrationData.email.value.split('@')[1]
                                }`}
                                style={{
                                  textDecoration: 'underline',
                                  fontWeight: 'bold',
                                }}
                              >
                                {registrationData.email.value}
                              </a>{' '}
                              to finish the registration.
                            </p>
                          </div>
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  ) : (
                    <Fragment>
                      <h2 className={classes.cardTitle}>Register</h2>
                      <CardBody>
                        <GridContainer justify='center'>
                          <GridItem xs={12} sm={5} md={5}>
                            <InfoArea
                              className={classes.infoArea}
                              title='Marketing'
                              description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                              icon={Timeline}
                              iconColor='rose'
                            />
                            <InfoArea
                              className={classes.infoArea}
                              title='Fully Coded in HTML5'
                              description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                              icon={Code}
                              iconColor='primary'
                            />
                            <InfoArea
                              className={classes.infoArea}
                              title='Built Audience'
                              description='There is also a Fully Customizable CMS Admin Dashboard for this product.'
                              icon={Group}
                              iconColor='info'
                            />
                          </GridItem>
                          <GridItem xs={12} sm={5} md={5}>
                            <div className={classes.textCenter}>
                              <Button
                                justIcon
                                round
                                color='twitter'
                                aria-label='sign up with Twitter'
                              >
                                <i
                                  className={
                                    classes.socials + ' fab fa-twitter'
                                  }
                                />
                              </Button>
                              {` `}
                              <Button
                                justIcon
                                round
                                color='dribbble'
                                aria-label='sign up with dribble'
                              >
                                <i
                                  className={
                                    classes.socials + ' fab fa-dribbble'
                                  }
                                />
                              </Button>
                              {` `}
                              <Button
                                justIcon
                                round
                                color='facebook'
                                aria-label='sign up with facebook'
                              >
                                <i
                                  className={
                                    classes.socials + ' fab fa-facebook-f'
                                  }
                                />
                              </Button>
                              {` `}
                              <h4 className={classes.socialTitle}>
                                or be classical
                              </h4>
                            </div>
                            <form className={classes.form}>
                              <UsernameInput
                                classes={classes}
                                updateRegistrationData={updateRegistrationData}
                              />
                              <EmailInput
                                classes={classes}
                                updateRegistrationData={updateRegistrationData}
                              />
                              <PasswordInput
                                classes={classes}
                                updateRegistrationData={updateRegistrationData}
                              />
                              <FormControlLabel
                                classes={{
                                  label: classes.label,
                                }}
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    onClick={() => handleToggle(1)}
                                    checkedIcon={
                                      <Check className={classes.checkedIcon} />
                                    }
                                    icon={
                                      <Check
                                        className={classes.uncheckedIcon}
                                      />
                                    }
                                    classes={{
                                      checked: classes.checked,
                                      root: classes.checkRoot,
                                    }}
                                    checked={
                                      this.state.checked.indexOf(1) !== -1
                                        ? true
                                        : false
                                    }
                                  />
                                }
                                label={
                                  <span>
                                    I agree to the{' '}
                                    <a href='#pablo'>terms and conditions</a>.
                                  </span>
                                }
                              />
                              <SignUpButton
                                classes={classes}
                                registrationData={registrationData}
                                enabled={checked[0]}
                                onSignUpSuccess={onSignUpSuccess}
                              />
                            </form>
                          </GridItem>
                        </GridContainer>
                      </CardBody>
                    </Fragment>
                  )}
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <CustomFooter classes={classes} />
        </div>
      </Fragment>
    )
  }
}

export default withStyles(signupPageStyle)(Components)
