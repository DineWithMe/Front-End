// type react properties
import PropTypes from 'prop-types'
// mutation constant
import { createUser } from '../../utils/mutationConstants'
// mutation component
import { Mutation } from 'react-apollo'
//core components
import Button from '../../components/CustomButtons/Button.jsx'

const SignUpButton = (props) => {
  const { disabled, classes, registrationData } = props
  return (
    <div className={classes.textCenter}>
      <Mutation mutation={createUser}>
        {(createUser) => (
          <Button
            round
            color='primary'
            disabled={!disabled}
            onClick={(e) => {
              e.preventDefault()
              createUser({
                variables: {
                  data: {
                    ...registrationData,
                  },
                },
              })
            }}
          >
            Get started
          </Button>
        )}
      </Mutation>
    </div>
  )
}

SignUpButton.propTypes = {
  classes: PropTypes.object,
  registrationData: PropTypes.object,
  disabled: PropTypes.number,
}
export default SignUpButton
