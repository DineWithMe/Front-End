import { Component, Fragment } from 'react'
// props typing
import PropTypes from 'prop-types'
// next routing
// import Link from 'next/link'
import { withRouter } from 'next/router'
// material ui icons
import LocalBar from '@material-ui/icons/LocalBar'
import ChatBubble from '@material-ui/icons/ChatBubble'
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline'
// material ui components
import ListItem from '@material-ui/core/ListItem'
// style
import ButtonDropDownStyle from '../style/ButtonDropDownStyle'
// components
import Button from '../../CustomButtons/Button.jsx'
import CustomDropdown from '../../CustomDropdown/CustomDropdown.jsx'

class ListItemDiscover extends Component {
  componentDidMount() {
    const { router } = this.props
    router.prefetch('/profile')
  }

  render() {
    const { classes } = this.props
    return (
      <ListItem className={classes.listItem}>
        <CustomDropdown
          innerStyle={{ marginTop: +10 }}
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
    )
  }
}

ListItemDiscover.propTypes = {
  classes: PropTypes.object,
  router: PropTypes.object,
}

export default withRouter(ListItemDiscover)
