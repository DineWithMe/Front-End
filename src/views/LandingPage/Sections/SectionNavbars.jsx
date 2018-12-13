import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Email from '@material-ui/icons/Email'

// core components
import Header from '../../../components/Header/Header.jsx'
import CustomDropdown from '../../../components/CustomDropdown/CustomDropdown.jsx'
import Button from '../../../components/CustomButtons/Button.jsx'

import navbarsStyle from '../../../jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx'

import profileImage from '../../../../static/img/faces/avatar.jpg'

class SectionNavbars extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Header
        brand='Navbar with notifications'
        color='dark'
        fixed
        changeColorOnScroll={{
          height: 300,
          color: 'info',
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
                Discover
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href='#pablo'
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color='transparent'
              >
                Wishlist
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

SectionNavbars.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(navbarsStyle)(SectionNavbars)
