import { Component, Fragment } from 'react'
import handleError from '../../utils/handleError'
// graphql query constant
import { userExist } from '../../utils/queryConstant.js'
// Apollo client
import { ApolloConsumer } from 'react-apollo'
// constants
import {
  FAILED,
  PASSED,
  NEUTRAL,
  LOADING,
  ERROR,
  USERNAME,
} from '../../utils/constants'
// type react properties
import PropTypes from 'prop-types'
// string validator
import validator from 'validator'
// material ui icon
import Face from '@material-ui/icons/Face'
// material ui components
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'
// styles
import { validationMessageStyle } from './style/styles'
// core components
import CustomInput from './CustomInput.jsx'
import ValidationMessage from '../CustomText/ValidationMessage.jsx'

class UsernameInput extends Component {
  state = { flag: NEUTRAL, message: '' }

  validateUserName = async (username, updateRegistrationData, client) => {
    const updateState = (flag, message) => {
      this.setState({ flag, message })
      updateRegistrationData(USERNAME, username, flag)
    }
    // username must starts with alphabet
    // username must contains only alphabet and number
    // username must be longer than 3 characters
    if (username === '') {
      updateState(NEUTRAL, '')
    } else if (!validator.isAlphanumeric(username)) {
      updateState(FAILED, 'Name must contains only alphabets and numbers')
    } else if (!validator.isAlpha(username[0])) {
      updateState(FAILED, 'Name must start with alphabet')
    } else if (!(username.length > 2 && username.length < 21)) {
      updateState(FAILED, 'the length must be within 3 to 20 characters')
    } else {
      // loading
      updateState(LOADING, '')
      // username must not be duplicate
      try {
        const { data } = await client.query({
          query: userExist,
          variables: { query: username },
        })
        if (data.userExist !== null) {
          updateState(FAILED, 'username is already taken')
        } else {
          updateState(PASSED, 'username is available')
        }
      } catch (err) {
        updateState(ERROR, handleError(err).message)
      }
    }
  }
  render() {
    const {
      validateUserName,
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
                onFocus: () => {
                  this.setState({ flag: NEUTRAL, message: '' })
                },
                onBlur: (e) => {
                  validateUserName(
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
                    <Face className={classes.inputAdornmentIcon} />
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
                placeholder: 'Username...',
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

UsernameInput.propTypes = {
  classes: PropTypes.object,
  registrationData: PropTypes.object,
  disabled: PropTypes.number,
  updateRegistrationData: PropTypes.func,
}

export default UsernameInput
