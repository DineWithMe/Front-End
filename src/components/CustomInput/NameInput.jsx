import { Component, Fragment } from 'react'
// graphql query constant
import { searchUser } from '../../utils/queryConstant.js'
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

const styles = () => ({
  facebook2: {
    color: '#6798e5',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
})

class NameInput extends Component {
  state = { validation: NEUTRAL, message: '' }

  validateUserName = async (name, client) => {
    // name must starts with alphabet
    // name must contains only alphabet and number
    // name must be longer than 3 letters
    if (
      !(
        validator.isAlphanumeric(name) &&
        validator.isAlpha(name[0]) &&
        name.length >= 3
      )
    )
      this.setState({
        validation: FAILED,
        message:
          'Name must contains only alphabets and numbers and must be 3 letters and above  ',
      })
    else if (name === '') this.setState({ validation: NEUTRAL, message: '' })
    else {
      this.setState({ validation: LOADING, message: '' })
      // name must not be duplicate
      const { data } = await client.query({
        query: searchUser,
        variables: { query: name },
      })
      if (data.users.length > 0)
        this.setState({
          validation: FAILED,
          message: 'user name already exists',
        })
      else this.setState({ validation: PASSED, message: '' })
    }
  }
  render() {
    const {
      validateUserName,
      props: { classes, registrationData },
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
                  registrationData.name = e.target.value.toLowerCase()
                },
                startAdornment: (
                  <InputAdornment
                    position='start'
                    className={classes.inputAdornment}
                  >
                    <Face className={classes.inputAdornmentIcon} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <CircularProgress
                      variant='indeterminate'
                      disableShrink
                      className={classes.facebook}
                      size={24}
                      thickness={4}
                    />
                  </InputAdornment>
                ),
                placeholder: 'User Name...',
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
}

export default NameInput
