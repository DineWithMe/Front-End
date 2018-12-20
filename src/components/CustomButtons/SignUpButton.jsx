import { Component } from 'react'
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

const initialState = {
  neutral: false,
  pass: false,
  failed: false,
  error: false,
  resError: false,
  message: undefined,
}

class SignUpButton extends Component {
  state = initialState
  updateMessage = (registrationData, createUser) => {
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
        ...initialState,
        error,
        message: '❗️error occurred in field(s)❗️',
      })
    else if (failed) {
      this.setState({
        ...initialState,
        failed,
        message: '🔴please fix all the required field(s)🔴',
      })
    } else if (neutral)
      this.setState({
        ...initialState,
        neutral,
        message: '🔷please fill in the empty field(s)🔷',
      })
    else if (passed) {
      createUser({
        variables: {
          data: {
            name: registrationData.username.value,
            username: registrationData.username.value,
            email: registrationData.email.value,
            password: registrationData.password.value,
          },
        },
      })
        .then(() => {
          this.setState({
            ...initialState,
            passed,
            message: '🍑Sign Up Success!🍑',
          })
        })
        .catch((err) => {
          this.setState({
            ...initialState,
            resError: true,
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
      state: { neutral, failed, error, resError, message },
      updateMessage,
    } = this

    return (
      <Mutation mutation={createUser}>
        {(createUser) => {
          return (
            <div className={classes.textCenter}>
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
              {(failed || error || neutral || resError) && (
                <ValidationMessage classes={classes} message={message} />
              )}
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
