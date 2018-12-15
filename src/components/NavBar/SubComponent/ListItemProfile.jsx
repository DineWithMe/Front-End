import { Component } from 'react'
// props typing
import PropTypes from 'prop-types'
// next routing
// import Link from 'next/link'
import { withRouter } from 'next/router'
// material ui icons
import AccountBox from '@material-ui/icons/AccountBox'
import SettingsApplications from '@material-ui/icons/SettingsApplications'
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import Restaurant from '@material-ui/icons/Restaurant'
// material ui components
import ListItem from '@material-ui/core/ListItem'
// image
import profileImage from '../../../../static/img/faces/avatar.jpg'
// style
import ButtonDropDownStyle from '../style/ButtonDropDownStyle'
// components
import Button from '../../CustomButtons/Button.jsx'
import CustomDropdown from '../../CustomDropdown/CustomDropdown.jsx'

class ListItemProfile extends Component {
  componentDidMount() {
    const { router } = this.props
    router.prefetch('/profile')
  }

  render() {
    const { classes, router } = this.props

    return (
      <ListItem className={classes.listItem}>
        <CustomDropdown
          left
          hoverColor='dark'
          buttonText={
            <img src={profileImage} className={classes.img} alt='profile' />
          }
          buttonProps={{
            style: { marginTop: '-15%', marginBottom: '-15%' },
            className: classes.navLink,
            color: 'transparent',
            'aria-label': 'user setting and profile',
          }}
          dropdownList={[
            <Button
              key='user profile'
              style={ButtonDropDownStyle}
              className={classes.navLink}
              color='transparent'
              aria-label='user profile'
              onClick={() => {
                router.push('/profile')
              }}
            >
              <AccountBox />
              &#160;&#160;&#160;{`Profile`}
            </Button>,

            <Button
              style={ButtonDropDownStyle}
              className={classes.navLink}
              color='transparent'
              aria-label='my upcoming dinner'
              key='my upcoming dinner'
            >
              <Restaurant />
              &#160;&#160;&#160;{'Upcoming'}
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
    )
  }
}

ListItemProfile.propTypes = {
  classes: PropTypes.object,
  router: PropTypes.object,
}

export default withRouter(ListItemProfile)
