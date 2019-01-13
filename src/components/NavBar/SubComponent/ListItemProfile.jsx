import { Component } from 'react'
// file path
import { getAvatarFilePath } from '../../../utils/fileOperation'
// props typing
import PropTypes from 'prop-types'
// next routing
import Router from 'next/router'
// import material ui width
import withWidth from '@material-ui/core/withWidth'
// unstated
import { userStateStore } from '../../../utils/unstated'
// material ui icons
import AccountBox from '@material-ui/icons/AccountBox'
import SettingsApplications from '@material-ui/icons/SettingsApplications'
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import Restaurant from '@material-ui/icons/Restaurant'
// default avatar
import defaultAvatar from '../../../../static/img/faces/default-avatar.png'
// material ui components
import ListItem from '@material-ui/core/ListItem'
// style
import { buttonDropDownStyle } from '../style/styles'
// components
import Button from '../../CustomButtons/Button.jsx'
import CustomDropdown from '../../CustomDropdown/CustomDropdown.jsx'

class ListItemProfile extends Component {
  componentDidMount() {
    Router.prefetch(`/profile?username=${userStateStore.state.username}`)
    // prefetch is not working in dev mode as the js is only generated on request
  }
  signOut = () => {
    userStateStore.resetUserState(true)
    Router.push('/')
  }
  render() {
    const {
      props: { classes, width },
      signOut,
    } = this
    const buttonStyle =
      width === 'xs' || width === 'sm'
        ? {}
        : { marginTop: '-15%', marginBottom: '-15%' }

    return (
      <ListItem className={classes.listItem}>
        <CustomDropdown
          left
          hoverColor='dark'
          buttonText={
            <img
              src={
                getAvatarFilePath(userStateStore.state.avatarFilename) ||
                defaultAvatar
              }
              className={classes.img}
              alt='profile'
            />
          }
          buttonProps={{
            style: buttonStyle,
            className: classes.navLink,
            color: 'transparent',
            'aria-label': 'user setting and profile',
          }}
          dropdownList={[
            <Button
              key='user profile'
              style={buttonDropDownStyle}
              className={classes.navLink}
              color='transparent'
              aria-label='user profile'
              onClick={() => {
                Router.push('/profile')
                // next/link doesnt work in this drop down list, need more study about custom drop down
              }}
            >
              <AccountBox />
              &#160;&#160;&#160;
              {`${userStateStore.state.name}`}
            </Button>,

            { divider: true },

            <Button
              style={buttonDropDownStyle}
              className={classes.navLink}
              color='transparent'
              aria-label='my upcoming dinner'
              key='my upcoming dinner'
            >
              <Restaurant />
              &#160;&#160;&#160;{'Upcoming'}
            </Button>,
            <Button
              style={buttonDropDownStyle}
              className={classes.navLink}
              color='transparent'
              aria-label='user settings'
              key='user setting'
            >
              <SettingsApplications />
              &#160;&#160;&#160;{'Setting'}
            </Button>,
            <Button
              style={buttonDropDownStyle}
              className={classes.navLink}
              color='transparent'
              aria-label='user sign out'
              key='user sign out'
              onClick={() => {
                signOut()
              }}
            >
              <PowerSettingsNew />
              &#160;&#160;&#160;{'Sign Out'}
            </Button>,
          ]}
        />
      </ListItem>
    )
  }
}

ListItemProfile.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
}

export default withWidth()(ListItemProfile)
