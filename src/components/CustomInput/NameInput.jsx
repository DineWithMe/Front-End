import { Component, Fragment } from 'react'
// graphql query constant
import { userExist } from '../../utils/queryConstant.js'
// Apollo client
import { ApolloConsumer } from 'react-apollo'
// constants
import { FAILED, PASSED, NEUTRAL, LOADING } from './utils/constants'
// type react properties
import PropTypes from 'prop-types'
// string validator
import validator from 'validator'
// material ui icon
import Face from '@material-ui/icons/Face'
// material ui components
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'
// core components
import CustomInput from '../../components/CustomInput/CustomInput.jsx'

class NameInput extends Component {
  state = { validation: NEUTRAL, message: '' }

  validateUserName = async (name, client) => {
    // name must starts with alphabet
    // name must contains only alphabet and number
    // name must be longer than 3 letters
    if (name === '') this.setState({ validation: NEUTRAL, message: '' })
    else if (!validator.isAlphanumeric(name))
      this.setState({
        validation: FAILED,
        message: 'Name must contains only alphabets and numbers',
      })
    else if (!validator.isAlpha(name[0]))
      this.setState({
        validation: FAILED,
        message: 'Name must start with alphabet',
      })
    else if (!(name.length > 2 && name.length < 21))
      this.setState({
        validation: FAILED,
        message: 'the length must be within 3 to 20 letters',
      })
    else {
      this.setState({ validation: LOADING, message: '' })
      // name must not be duplicate
      const { data } = await client.query({
        query: userExist,
        variables: { query: name },
      })
      if (data.userExist !== null)
        this.setState({
          validation: FAILED,
          message: 'username already exists',
        })
      else this.setState({ validation: PASSED, message: '' })
    }
  }
  render() {
    const {
      validateUserName,
      props: { classes, updateName },
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
                onFocus: () => {
                  this.setState({ validation: NEUTRAL, message: '' })
                },
                onBlur: (e) => {
                  validateUserName(e.target.value.toLowerCase(), client)
                },
                onChange: (e) => {
                  updateName(e.target.value.toLowerCase())
                },
                startAdornment: (
                  <InputAdornment
                    position='start'
                    className={classes.inputAdornment}
                  >
                    <Face className={classes.inputAdornmentIcon} />
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
                placeholder: 'Username...',
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

NameInput.propTypes = {
  classes: PropTypes.object,
  registrationData: PropTypes.object,
  disabled: PropTypes.number,
  updateName: PropTypes.func,
}

export default NameInput
