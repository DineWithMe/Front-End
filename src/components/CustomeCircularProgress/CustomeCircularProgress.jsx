import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  // Reproduce the Facebook spinners.
  facebook: {
    margin: theme.spacing.unit * 2,
    position: 'relative',
  },
  facebook1: {
    color: '#eef3fd',
  },
  facebook2: {
    color: '#6798e5',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
})

function CustomizedProgress(props) {
  const { classes } = props
  return (
    <div className={classes.facebook}>
      <CircularProgress
        variant='determinate'
        value={100}
        className={classes.facebook1}
        size={24}
        thickness={4}
      />
      <CircularProgress
        variant='indeterminate'
        disableShrink
        className={classes.facebook2}
        size={24}
        thickness={4}
      />
    </div>
  )
}

CustomizedProgress.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CustomizedProgress)
