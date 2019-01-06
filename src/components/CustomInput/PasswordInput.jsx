import { Component, Fragment } from 'react'
// constants
import {
  FAILED,
  PASSED,
  NEUTRAL,
  LOADING,
  PASSWORD,
} from '../../constants/general'
// type react properties
import PropTypes from 'prop-types'
// material ui icon
import LockOutlined from '@material-ui/icons/LockOutlined'
// material ui components
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'
// styles
import { validationMessageStyle } from './style/styles'
// core components
import CustomInput from './CustomInput.jsx'
import ValidationMessage from '../CustomText/ValidationMessage.jsx'

class PasswordInput extends Component {
  state = { flag: NEUTRAL, message: '' }

  validateUserPassword = (password, updateRegistrationData) => {
    const updateState = (flag, message) => {
      this.setState({ flag, message })
      updateRegistrationData(PASSWORD, password, flag)
    }
    // password must be within 8 to 64 character
    if (password === '') {
      updateState(NEUTRAL, '')
    } else if (!(password.length > 7 && password.length < 1025)) {
      updateState(FAILED, 'Password length must be at least 8 characters')
    } else {
      updateState(PASSED, '')
    }
  }

  render() {
    const {
      validateUserPassword,
      props: { classes, updateRegistrationData },
      state: { flag, message },
    } = this
    return (
      <Fragment>
        <CustomInput
          error={flag === FAILED}
          success={flag === PASSED}
          formControlProps={{
            fullWidth: true,
            className: classes.customFormControlClasses,
          }}
          inputProps={{
            type: 'password',
            onFocus: () => {
              this.setState({ flag: NEUTRAL, message: '' })
            },
            onBlur: (e) => {
              validateUserPassword(e.target.value, updateRegistrationData)
            },
            startAdornment: (
              <InputAdornment
                position='start'
                className={classes.inputAdornment}
              >
                <LockOutlined className={classes.inputAdornmentIcon} />
              </InputAdornment>
            ),
            endAdornment: flag === LOADING && (
              <InputAdornment position='end' className={classes.inputAdornment}>
                <CircularProgress
                  variant='indeterminate'
                  disableShrink
                  size={24}
                  thickness={4}
                />
              </InputAdornment>
            ),
            placeholder: 'Password...',
          }}
        />
        {flag === FAILED && (
          <ValidationMessage
            classes={classes}
            message={message}
            style={validationMessageStyle}
          />
        )}
      </Fragment>
    )
  }
}

PasswordInput.propTypes = {
  classes: PropTypes.object,
  registrationData: PropTypes.object,
  disabled: PropTypes.number,
  updateRegistrationData: PropTypes.func,
}

export default PasswordInput
