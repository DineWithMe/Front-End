// props typing
import PropTypes from 'prop-types'
// next routing
import Link from 'next/link'
// material ui icons
import PersonAdd from '@material-ui/icons/PersonAdd'
// material ui components
import ListItem from '@material-ui/core/ListItem'
// components
import Button from '../../CustomButtons/Button.jsx'

const ListItemSignUp = (props) => {
  const { classes } = props

  return (
    <ListItem className={classes.listItem}>
      <Link href='/register' prefetch passHref>
        <Button
          className={classes.navLink}
          color='transparent'
          aria-label='go to sign up page'
        >
          <PersonAdd />
          {`Sign Up`}
        </Button>
      </Link>
    </ListItem>
  )
}

ListItemSignUp.propTypes = {
  classes: PropTypes.object,
}

export default ListItemSignUp
