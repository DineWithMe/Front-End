import { Component, Fragment } from 'react'
// set component props types
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
// @material-ui/icons
import LocalDining from '@material-ui/icons/LocalDining'
// style
import navbarsStyle from '../../jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx'
// core components
import Header from '../Header/Header.jsx'
import ListItemSignIn from './SubComponent/ListItemSignIn.jsx'
import ListItemSignUp from './SubComponent/ListItemSignUp.jsx'
import ListItemNotifications from './SubComponent/ListItemNotification.jsx'
import ListItemDiscover from './SubComponent/ListItemDiscover.jsx'
import ListItemProfile from './SubComponent/ListItemProfile.jsx'

class NavBar extends Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { router, classes, ...rest } = this.props
    return (
      <Header
        {...rest}
        brand={
          <Fragment>
            <LocalDining />
            {'Dine With Me'}
          </Fragment>
        }
        color='dark'
        fixed
        changeColorOnScroll={{
          height: 600,
          color: 'primary',
        }}
        links={
          <List className={classes.list + ' ' + classes.mlAuto}>
            <ListItemSignIn classes={classes} />
            <ListItemSignUp classes={classes} />
            <ListItemDiscover classes={classes} />
            <ListItemNotifications classes={classes} />
            <ListItemProfile classes={classes} />
          </List>
        }
      />
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(navbarsStyle)(NavBar)
