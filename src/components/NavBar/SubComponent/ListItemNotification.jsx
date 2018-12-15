// props typing
import PropTypes from 'prop-types'
// next routing
// import Link from 'next/link'
// material ui icons
import Notifications from '@material-ui/icons/Notifications'
// material ui components
import ListItem from '@material-ui/core/ListItem'
// components
import Button from '../../CustomButtons/Button.jsx'

const ListItemNotifications = (props) => {
  const { classes } = props

  return (
    <ListItem className={classes.listItem}>
      <Button
        className={classes.navLink}
        color='transparent'
        aria-label='read notifications'
      >
        <Notifications />
      </Button>
    </ListItem>
  )
}

ListItemNotifications.propTypes = {
  classes: PropTypes.object,
}

export default ListItemNotifications
