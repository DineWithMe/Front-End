// props typing
import PropTypes from 'prop-types'
// next routing
import Link from 'next/link'
// material ui icons
import ExitToApp from '@material-ui/icons/ExitToApp'
// material ui components
import ListItem from '@material-ui/core/ListItem'
// components
import Button from '../../CustomButtons/Button.jsx'

const ListItemSignIn = (props) => {
  const { classes } = props

  return (
    <ListItem className={classes.listItem}>
      {/* prefetch is not working in dev mode as the js is only generated on request */}
      <Link href='/login' prefetch passHref>
        <Button
          className={classes.navLink}
          color='transparent'
          aria-label='go to sign in page'
        >
          <ExitToApp />
          {`Sign In`}
        </Button>
      </Link>
    </ListItem>
  )
}

ListItemSignIn.propTypes = {
  classes: PropTypes.object,
}

export default ListItemSignIn
