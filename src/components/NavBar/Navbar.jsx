import React, { Fragment } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import PersonAdd from '@material-ui/icons/PersonAdd'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Notifications from '@material-ui/icons/Notifications'
import LocalDining from '@material-ui/icons/LocalDining'
// core components
import Header from '../Header/Header.jsx'
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx'
import Button from '../CustomButtons/Button.jsx'
// style
import navbarsStyle from '../../jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx'
// image
import profileImage from '../../../static/img/faces/avatar.jpg'

class NavBar extends React.Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { classes, ...rest } = this.props
    return (
      <Header
        brand={
          <Fragment>
            <LocalDining />
            {'Dine With Me'}
          </Fragment>
        }
        color='dark'
        fixed
        changeColorOnScroll={{
          height: 300,
          color: 'primary',
        }}
        links={
          <List className={classes.list + ' ' + classes.mlAuto}>
            <ListItem className={classes.listItem}>
              <Link href='/sign-in' prefetch passHref>
                <Button
                  href='#pablo'
                  className={classes.navLink}
                  color='transparent'
                  aria-label='go to dine with me sing ip page'
                >
                  <ExitToApp />
                  {`Sign In`}
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href='/sign-up' prefetch passHref>
                <Button
                  href='#pablo'
                  className={classes.navLink}
                  color='transparent'
                  aria-label='go to dine with me sing up page'
                >
                  <PersonAdd />
                  {`Sign Up`}
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href='#pablo'
                className={classes.navLink}
                color='transparent'
                aria-label='read notifications'
              >
                <Notifications />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                caret={false}
                hoverColor='dark'
                dropdownHeader='Dropdown Header'
                buttonText={
                  <img
                    src={profileImage}
                    className={classes.img}
                    alt='profile'
                  />
                }
                buttonProps={{
                  style: { marginTop: -10, marginBottom: -10 },
                  className: classes.navLink,
                  color: 'transparent',
                }}
                dropdownList={['Me', 'Settings and other stuff', 'Sign out']}
              />
            </ListItem>
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
