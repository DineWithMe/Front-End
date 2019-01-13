import { Component } from 'react'
// apollo mutation component
import { Mutation } from 'react-apollo'
// environment variable
import getConfig from 'next/config'
// state
import { userStateStore } from '../../utils/unstated'
// router
import Router from 'next/router'
// error handling
import handleError from '../../utils/handleError'
//cookies
import Cookies from 'js-cookie'
// type react properties
import PropTypes from 'prop-types'
// constants
import { FAILED, PASSED, ERROR, NEUTRAL } from '../../constants/general'
import { USER_SESSION, EXPIRES } from '../../constants/cookies'
import { createUser } from '../../constants/mutationOperations'
// google recaptcha
import Reaptcha from 'reaptcha'
// core components
import Button from '../../components/CustomButtons/Button.jsx'
import ValidationMessage from '../CustomText/ValidationMessage.jsx'

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
    const { username, email, password } = registrationData
    const passed =
      username.flag === PASSED &&
      email.flag === PASSED &&
      password.flag === PASSED

    const failed =
      username.flag === FAILED ||
      email.flag === FAILED ||
      password.flag === FAILED

    const error =
      username.flag === ERROR || email.flag === ERROR || password.flag === ERROR

    const neutral =
      username.flag === NEUTRAL ||
      email.flag === NEUTRAL ||
      password.flag === NEUTRAL

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
      this.setState({
        message: '🐇Signing up, please wait...🐇',
      })
      await createUser({
        variables: {
          data: {
            name: username.value,
            username: username.value,
            email: email.value,
            password: password.value,
            reCAPTCHAToken: this.state.reCAPTCHAToken,
          },
        },
      })
        .then(({ data }) => {
          const {
            createUser: { user, userToken },
          } = data
          userStateStore.setState({
            login: true,
            ...user,
            userId: user.id,
            userToken,
          })
          onSignUpSuccess()
          Cookies.set(USER_SESSION, userToken, {
            expires: EXPIRES,
          })
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
        {(createUser, { loading }) => {
          return (
            <div className={classes.textCenter}>
              {verified ? (
                <Button
                  round
                  color='primary'
                  disabled={!enabled || loading}
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
export default SignUpButton
