import { Component } from 'react'
// environment variable
import getConfig from 'next/config'
// router
import Router, { withRouter } from 'next/router'
// error handling
import handleError from '../../utils/handleError'
//cookies
import Cookies from 'js-cookie'
// type react properties
import PropTypes from 'prop-types'
// constants
import { FAILED, PASSED, ERROR, NEUTRAL } from '../../constants/general'
import { USER_SESSION } from '../../constants/cookies'
import { createUser } from '../../constants/mutationOperations'
// mutation component
import { Mutation } from 'react-apollo'
// core components
import Button from '../../components/CustomButtons/Button.jsx'
import ValidationMessage from '../CustomText/ValidationMessage.jsx'
import Reaptcha from 'reaptcha'

const { publicRuntimeConfig } = getConfig()

class SignUpButton extends Component {
  state = { message: undefined, verified: false, reCAPTCHAToken: '' }

  onVerify = (reCAPTCHAToken) => {
    this.setState({
      verified: true,
      message: '🐱Captcha verification successful!🐱',
      reCAPTCHAToken,
    })
  }
  onLoad = () => {
    this.captcha.renderExplicitly()
  }
  updateMessage = async (registrationData, createUser, onSignUpSuccess) => {
    const passed =
      registrationData.username.flag === PASSED &&
      registrationData.email.flag === PASSED &&
      registrationData.password.flag === PASSED

    const failed =
      registrationData.username.flag === FAILED ||
      registrationData.email.flag === FAILED ||
      registrationData.password.flag === FAILED

    const error =
      registrationData.username.flag === ERROR ||
      registrationData.email.flag === ERROR ||
      registrationData.password.flag === ERROR

    const neutral =
      registrationData.username.flag === NEUTRAL ||
      registrationData.email.flag === NEUTRAL ||
      registrationData.password.flag === NEUTRAL

    if (error)
      this.setState({
        message: '❗️error occurred in field(s)❗️',
      })
    else if (failed) {
      this.setState({
        message: '🔴Please correct the required field(s)🔴',
      })
    } else if (neutral)
      this.setState({
        message: '🔷Please fill in the empty field(s)🔷',
      })
    else if (passed) {
      await createUser({
        variables: {
          data: {
            name: registrationData.username.value,
            username: registrationData.username.value,
            email: registrationData.email.value,
            password: registrationData.password.value,
            reCAPTCHAToken: this.state.reCAPTCHAToken,
          },
        },
      })
        .then(({ data }) => {
          onSignUpSuccess()
          Cookies.set(USER_SESSION, data.createUser.token, { expires: 30 })
          Router.push('/register?verified=false', '/register?verified=false', {
            shallow: true,
          })
        })
        .catch((err) => {
          const error = handleError(err)
          this.setState({
            verified: false,
            message: error.message,
          })
        })
    }
  }

  render() {
    const {
      props: { enabled, classes, registrationData, onSignUpSuccess },
      state: { message, verified },
      updateMessage,
      onVerify,
      onLoad,
    } = this

    return (
      <Mutation mutation={createUser}>
        {(createUser) => {
          return (
            <div className={classes.textCenter}>
              {verified ? (
                <Button
                  round
                  color='primary'
                  disabled={!enabled}
                  onClick={(e) => {
                    e.preventDefault()
                    updateMessage(registrationData, createUser, onSignUpSuccess)
                  }}
                >
                  Sign Up!
                </Button>
              ) : (
                <Reaptcha
                  ref={(e) => (this.captcha = e)}
                  sitekey={publicRuntimeConfig.reCAPTCHA_apiKey}
                  onVerify={onVerify}
                  onLoad={onLoad}
                  explicit
                  theme='dark'
                  onExpire={() => {
                    this.setState({
                      verified: false,
                      message: 'reCAPTCHA expired, please re-verify',
                    })
                  }}
                  onError={() => {
                    this.setState({
                      verified: false,
                      message: 'reCAPTCHA error, please re-verify',
                    })
                  }}
                />
              )}
              {<ValidationMessage classes={classes} message={message} />}
            </div>
          )
        }}
      </Mutation>
    )
  }
}

SignUpButton.propTypes = {
  classes: PropTypes.object,
  registrationData: PropTypes.object,
  enabled: PropTypes.number,
  onSignUpSuccess: PropTypes.func,
}
export default withRouter(SignUpButton)
