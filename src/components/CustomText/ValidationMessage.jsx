// type react properties
import PropTypes from 'prop-types'

const ValidationMessage = (props) => {
  const { classes, message, style } = props
  return (
    <p
      className={classes.textCenter}
      style={{
        color: '#f44336',
        fontSize: '13px',
        zIndex: '1',
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        ...style,
      }}
    >
      {message}
    </p>
  )
}
ValidationMessage.propTypes = {
  classes: PropTypes.object,
  message: PropTypes.string,
  style: PropTypes.object,
}

export default ValidationMessage
