import { Component } from 'react'
import getConfig from 'next/config'
// type react properties
import PropTypes from 'prop-types'
// constants
import { FAILED, PASSED, ERROR, NEUTRAL } from '../../utils/constants'
// mutation constant
import { createUser } from '../../utils/mutationConstants'
// mutation component
import { Mutation } from 'react-apollo'
//core components
import Button from '../../components/CustomButtons/Button.jsx'
import ValidationMessage from '../CustomText/ValidationMessage.jsx'
import Reaptcha from 'reaptcha'

const { publicRuntimeConfig } = getConfig()

class SignUpButton extends Component {
  state = { message: undefined, verified: false }

  onVerify = () => {
    this.setState({
      verified: true,
      message: '🐱Captcha verification successful!🐱',
    })
  }
  onLoad = () => {
    this.captcha.renderExplicitly()
  }
  updateMessage = async (registrationData, createUser) => {
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
          },
        },
      })
        .then(async () => {
          this.setState({
            message: '🍑You have successfully signed up!🍑',
          })
        })
        .catch((err) => {
          this.setState({
            message: `❗️${(err.message &&
              ((err.message && (err.message.split(':')[1] || err.message)) ||
                err)) ||
              err}❗️`,
          })
        })
    }
  }

  render() {
    const {
      props: { enabled, classes, registrationData },
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
                    updateMessage(registrationData, createUser)
                  }}
                >
                  Sign Up!
                </Button>
              ) : (
                <Reaptcha
                  ref={(e) => (this.captcha = e)}
                  sitekey={publicRuntimeConfig.recaptcha_apiKey}
                  onVerify={onVerify}
                  onLoad={onLoad}
                  explicit
                  theme='dark'
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
}
export default SignUpButton
