import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Email from '@material-ui/icons/Email'

// core components
import Header from '../Header/Header.jsx'
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx'
import Button from '../CustomButtons/Button.jsx'

import navbarsStyle from '../../jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx'

import profileImage from '../../../static/img/faces/avatar.jpg'

class NavBar extends React.Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { classes, ...rest } = this.props
    return (
      <Header
        brand='Dine With Me'
        color='dark'
        fixed
        changeColorOnScroll={{
          height: 300,
          color: 'primary',
        }}
        links={
          <List className={classes.list + ' ' + classes.mlAuto}>
            <ListItem className={classes.listItem}>
              <Button
                href='#pablo'
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color='transparent'
              >
                <Link href='/sign-in' prefetch passHref>
                  <div>{`Sign In`}</div>
                </Link>
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href='#pablo'
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color='transparent'
              >
                <Link href='/sign-up' prefetch passHref>
                  <div>{`Sign Up`}</div>
                </Link>
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href='#pablo'
                className={classes.notificationNavLink}
                onClick={(e) => e.preventDefault()}
                color='rose'
                justIcon
                round
              >
                <Email />
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
                  className:
                    classes.navLink + ' ' + classes.imageDropdownButton,
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
