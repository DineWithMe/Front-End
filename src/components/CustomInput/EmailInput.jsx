import { Component, Fragment } from 'react'
// graphql query constant
import { emailExist } from '../../utils/queryConstant.js'
// Apollo client
import { ApolloConsumer } from 'react-apollo'
// constants
import { FAILED, PASSED, NEUTRAL, LOADING } from './utils/constants'
// type react properties
import PropTypes from 'prop-types'
// validator
import validator from 'validator'
// material ui icon
import Email from '@material-ui/icons/Email'
// material ui components
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'
// core components
import CustomInput from '../../components/CustomInput/CustomInput.jsx'

class EmailInput extends Component {
  state = { validation: NEUTRAL, message: '' }

  validateUserEmail = async (email, client) => {
    // check if email is valid and exists
    if (email === '') this.setState({ validation: NEUTRAL, message: '' })
    else if (!validator.isEmail(email) || email.length > 254)
      this.setState({
        validation: FAILED,
        message: 'invalid email',
      })
    else {
      this.setState({ validation: LOADING, message: '' })
      // email must not be duplicate

      try {
        const res = await client.query({
          query: emailExist,
          variables: { query: email },
        })
        if (res.data.emailExist !== null)
          this.setState({
            validation: FAILED,
            message: 'email already exists',
          })
        else this.setState({ validation: PASSED, message: '' })
      } catch (err) {
        this.setState({
          validation: FAILED,
          message: err.message.split('GraphQL error:'),
        })
      }
    }
  }
  render() {
    const {
      validateUserEmail,
      props: { classes, updateEmail },
      state: { validation, message },
    } = this
    return (
      <ApolloConsumer>
        {(client) => (
          <Fragment>
            <CustomInput
              error={validation === FAILED}
              success={validation === PASSED}
              formControlProps={{
                fullWidth: true,
                className: classes.customFormControlClasses,
              }}
              inputProps={{
                type: 'email',
                autoComplete: 'username',
                onFocus: () => {
                  this.setState({ validation: NEUTRAL, message: '' })
                },
                onBlur: (e) => {
                  validateUserEmail(e.target.value.toLowerCase(), client)
                },
                onChange: (e) => {
                  updateEmail(e.target.value.toLowerCase())
                },
                startAdornment: (
                  <InputAdornment
                    position='start'
                    className={classes.inputAdornment}
                  >
                    <Email className={classes.inputAdornmentIcon} />
                  </InputAdornment>
                ),
                endAdornment: validation === LOADING && (
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
            {validation === FAILED && (
              <p
                className={classes.textCenter}
                style={{ color: '#999', marginTop: '-5%', fontSize: '12px' }}
              >
                {message}
              </p>
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
  updateEmail: PropTypes.func,
}

export default EmailInput
