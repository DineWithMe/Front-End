import { Component, Fragment } from 'react'
// constants
import { FAILED, PASSED, NEUTRAL, LOADING } from './utils/constants'
// type react properties
import PropTypes from 'prop-types'
// material ui icon
import LockOutlined from '@material-ui/icons/LockOutlined'
// material ui components
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'
// core components
import CustomInput from './CustomInput.jsx'

class PasswordInput extends Component {
  state = { validation: NEUTRAL, message: '' }

  validateUserPassword = (password) => {
    // password must be within 8 to 64 character
    if (password === '') this.setState({ validation: NEUTRAL, message: '' })
    else if (!(password.length > 7 && password.length < 65))
      this.setState({
        validation: FAILED,
        message: 'Password length must be at least 8 letters',
      })
    else this.setState({ validation: PASSED, message: '' })
  }

  render() {
    const {
      validateUserPassword,
      props: { classes, updatePassword },
      state: { validation, message },
    } = this
    return (
      <Fragment>
        <CustomInput
          error={validation === FAILED}
          success={validation === PASSED}
          formControlProps={{
            fullWidth: true,
            className: classes.customFormControlClasses,
          }}
          inputProps={{
            autoComplete: 'new-password',
            type: 'password',
            onFocus: () => {
              this.setState({ validation: NEUTRAL, message: '' })
            },
            onBlur: (e) => {
              validateUserPassword(e.target.value)
            },
            onChange: (e) => {
              updatePassword(e.target.value)
            },
            startAdornment: (
              <InputAdornment
                position='start'
                className={classes.inputAdornment}
              >
                <LockOutlined className={classes.inputAdornmentIcon} />
              </InputAdornment>
            ),
            endAdornment: validation === LOADING && (
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
        {validation === FAILED && (
          <p
            className={classes.textCenter}
            style={{ color: '#999', marginTop: '-5%', fontSize: '12px' }}
          >
            {message}
          </p>
        )}
      </Fragment>
    )
  }
}

PasswordInput.propTypes = {
  classes: PropTypes.object,
  registrationData: PropTypes.object,
  disabled: PropTypes.number,
  updatePassword: PropTypes.func,
}

export default PasswordInput
