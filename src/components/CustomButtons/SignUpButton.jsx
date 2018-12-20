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

class SignUpButton extends Component {
  state = {
    neutral: false,
  }

  render() {
    const {
      props: { enabled, classes, registrationData },
      state: { neutral },
    } = this

    let message = ''

    const pass =
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

    const dNeutral =
      registrationData.username.flag === NEUTRAL ||
      registrationData.email.flag === NEUTRAL ||
      registrationData.password.flag === NEUTRAL

    if (error) message = 'network error occurred'
    else if (failed) message = '🔴please fix all the required field(s)🔴'
    else if (dNeutral) message = '🔷please fill in the empty field(s)🔷'

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
                  if (!error && !failed && dNeutral) {
                    this.setState({ neutral: true })
                  }
                  pass &&
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
                }}
              >
                Get started
              </Button>
              {(failed || error || neutral) && (
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
