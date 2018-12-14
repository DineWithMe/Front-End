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
import AccountBox from '@material-ui/icons/AccountBox'
import SettingsApplications from '@material-ui/icons/SettingsApplications'
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import LocalBar from '@material-ui/icons/LocalBar'
import ChatBubble from '@material-ui/icons/ChatBubble'
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline'
import Restaurant from '@material-ui/icons/Restaurant'
// core components
import Header from '../Header/Header.jsx'
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx'
import Button from '../CustomButtons/Button.jsx'
// style
import navbarsStyle from '../../jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx'
// image
import profileImage from '../../../static/img/faces/avatar.jpg'

const ButtonDropDownStyle = {
  marginTop: '-12.5%',
  marginBottom: '-12.5%',
  marginLeft: '-20%',
  paddingRight: '+130%',
  textTransform: 'capitalize',
}

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
          height: 600,
          color: 'primary',
        }}
        links={
          <List className={classes.list + ' ' + classes.mlAuto}>
            <ListItem className={classes.listItem}>
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
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                hoverColor='dark'
                dropPlacement='bottom'
                buttonText={
                  <Fragment>
                    <LocalBar />
                    {'Discover'}
                  </Fragment>
                }
                buttonProps={{
                  style: { marginTop: '-15%', marginBottom: '-15%' },
                  className: classes.navLink,
                  color: 'transparent',
                  'aria-label': 'discover host or guest',
                }}
                dropdownList={[
                  <Button
                    style={ButtonDropDownStyle}
                    className={classes.navLink}
                    color='transparent'
                    aria-label='discover host'
                    key='discover guest'
                  >
                    <ChatBubbleOutline />
                    &#160;&#160;&#160;{'guest'}
                  </Button>,
                  <Button
                    style={ButtonDropDownStyle}
                    className={classes.navLink}
                    color='transparent'
                    aria-label='discover host'
                    key='discover host'
                  >
                    <ChatBubble />
                    &#160;&#160;&#160;{'Host'}
                  </Button>,
                ]}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
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
                hoverColor='dark'
                buttonText={
                  <img
                    src={profileImage}
                    className={classes.img}
                    alt='profile'
                  />
                }
                buttonProps={{
                  style: { marginTop: '-15%', marginBottom: '-15%' },
                  className: classes.navLink,
                  color: 'transparent',
                  'aria-label': 'user setting and profile',
                }}
                dropdownList={[
                  <Link href='/profile' prefetch passHref key='user profile'>
                    <Button
                      style={ButtonDropDownStyle}
                      className={classes.navLink}
                      color='transparent'
                      aria-label='user profile'
                    >
                      <AccountBox />
                      &#160;&#160;&#160;{'Profile'}
                    </Button>
                  </Link>,
                  <Button
                    style={ButtonDropDownStyle}
                    className={classes.navLink}
                    color='transparent'
                    aria-label='my upcoming dinner'
                    key='my upcoming dinner'
                  >
                    <Restaurant />
                    &#160;&#160;&#160;{'Upcoming Dinner'}
                  </Button>,
                  <Button
                    style={ButtonDropDownStyle}
                    className={classes.navLink}
                    color='transparent'
                    aria-label='user settings'
                    key='user setting'
                  >
                    <SettingsApplications />
                    &#160;&#160;&#160;{'Setting'}
                  </Button>,
                  <Button
                    style={ButtonDropDownStyle}
                    className={classes.navLink}
                    color='transparent'
                    aria-label='user sign out'
                    key='user sign out'
                  >
                    <PowerSettingsNew />
                    &#160;&#160;&#160;{'Sign Out'}
                  </Button>,
                ]}
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
