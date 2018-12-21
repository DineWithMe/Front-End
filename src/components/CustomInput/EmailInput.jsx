import { Component, Fragment } from 'react'
// graphql query constant
import { emailExist } from '../../utils/queryConstant.js'
// Apollo client
import { ApolloConsumer } from 'react-apollo'
// constants
import {
  FAILED,
  PASSED,
  NEUTRAL,
  LOADING,
  ERROR,
  EMAIL,
} from '../../utils/constants'
// type react properties
import PropTypes from 'prop-types'
// validator
import validator from 'validator'
// material ui icon
import Email from '@material-ui/icons/Email'
// material ui components
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'
// styles
import { validationMessageStyle } from './style/styles'
// core components
import CustomInput from '../../components/CustomInput/CustomInput.jsx'
import ValidationMessage from '../CustomText/ValidationMessage.jsx'

class EmailInput extends Component {
  state = { flag: NEUTRAL, message: '' }

  validateUserEmail = async (email, updateRegistrationData, client) => {
    const updateState = (flag, message) => {
      this.setState({ flag, message })
      updateRegistrationData(EMAIL, email, flag)
    }
    // check if email is valid and exists
    if (email === '') {
      updateState(NEUTRAL, '')
    } else if (!validator.isEmail(email) || email.length > 254) {
      updateState(FAILED, 'invalid email format')
    } else {
      // loading
      updateState(LOADING, '')
      // email must not be duplicate
      try {
        const res = await client.query({
          query: emailExist,
          variables: { query: email },
        })
        if (res.data.emailExist !== null) {
          updateState(FAILED, 'email is already taken')
        } else {
          updateState(PASSED, 'valid email')
        }
      } catch (err) {
        updateState(
          ERROR,
          (err.message && (err.message.split(':')[1] || err.message)) || err
        )
      }
    }
  }
  render() {
    const {
      validateUserEmail,
      props: { classes, updateRegistrationData },
      state: { flag, message },
    } = this
    const error = flag === FAILED || flag === ERROR
    return (
      <ApolloConsumer>
        {(client) => (
          <Fragment>
            <CustomInput
              error={error}
              success={flag === PASSED}
              formControlProps={{
                fullWidth: true,
                className: classes.customFormControlClasses,
              }}
              inputProps={{
                type: 'email',
                autoComplete: 'username',
                onFocus: () => {
                  this.setState({ flag: NEUTRAL, message: '' })
                },
                onBlur: (e) => {
                  validateUserEmail(
                    e.target.value.toLowerCase(),
                    updateRegistrationData,
                    client
                  )
                },
                startAdornment: (
                  <InputAdornment
                    position='start'
                    className={classes.inputAdornment}
                  >
                    <Email className={classes.inputAdornmentIcon} />
                  </InputAdornment>
                ),
                endAdornment: flag === LOADING && (
                  <InputAdornment
                    position='end'
                    className={classes.inputAdornment}
                  >
                    <CircularProgress
                      variant='indeterminate'
                      disableShrink
                      size={24}
                      thickness={4}
                    />
                  </InputAdornment>
                ),
                placeholder: 'Email...',
              }}
            />
            {error && (
              <ValidationMessage
                classes={classes}
                message={message}
                style={validationMessageStyle}
              />
            )}
          </Fragment>
        )}
      </ApolloConsumer>
    )
  }
}

EmailInput.propTypes = {
  classes: PropTypes.object,
  registrationData: PropTypes.object,
  disabled: PropTypes.number,
  updateRegistrationData: PropTypes.func,
}

export default EmailInput
