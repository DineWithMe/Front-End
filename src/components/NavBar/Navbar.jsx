import { Component } from 'react'
// set component props types
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
// state
import { UserStateContainer } from '../../utils/unstated'
import { Subscribe } from 'unstated'
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
    const { classes, ...rest } = this.props
    return (
      <Subscribe to={[UserStateContainer]}>
        {(userData) => (
          <Header
            {...rest}
            brand={
              <>
                <LocalDining />
                {'Dine With Me'}
              </>
            }
            color='dark'
            fixed
            changeColorOnScroll={{
              height: 600,
              color: 'primary',
            }}
            links={
              <List className={classes.list + ' ' + classes.mlAuto}>
                {userData.state.login ? (
                  <>
                    <ListItemDiscover classes={classes} />
                    <ListItemNotifications classes={classes} />
                    <ListItemProfile classes={classes} />
                  </>
                ) : (
                  <>
                    <ListItemSignIn classes={classes} />
                    <ListItemSignUp classes={classes} />
                  </>
                )}
              </List>
            }
          />
        )}
      </Subscribe>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(navbarsStyle)(NavBar)
