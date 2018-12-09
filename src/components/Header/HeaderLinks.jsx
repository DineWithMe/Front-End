/* eslint-disable */
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// react components for routing our app without refresh
import Link from 'next/link'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Icon from '@material-ui/core/Icon'

// @material-ui/icons
import Apps from '@material-ui/icons/Apps'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import ViewDay from '@material-ui/icons/ViewDay'
import Dns from '@material-ui/icons/Dns'
import Build from '@material-ui/icons/Build'
import ListIcon from '@material-ui/icons/List'
import People from '@material-ui/icons/People'
import Assignment from '@material-ui/icons/Assignment'
import MonetizationOn from '@material-ui/icons/MonetizationOn'
import Chat from '@material-ui/icons/Chat'
import Call from '@material-ui/icons/Call'
import ViewCarousel from '@material-ui/icons/ViewCarousel'
import AccountBalance from '@material-ui/icons/AccountBalance'
import ArtTrack from '@material-ui/icons/ArtTrack'
import ViewQuilt from '@material-ui/icons/ViewQuilt'
import LocationOn from '@material-ui/icons/LocationOn'
import Fingerprint from '@material-ui/icons/Fingerprint'
import AttachMoney from '@material-ui/icons/AttachMoney'
import Store from '@material-ui/icons/Store'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PersonAdd from '@material-ui/icons/PersonAdd'
import Layers from '@material-ui/icons/Layers'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import LineStyle from '@material-ui/icons/LineStyle'

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx'
import Button from '../CustomButtons/Button.jsx'

import headerLinksStyle from '../../../static/assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx'

function HeaderLinks({ ...props }) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const smoothScroll = (e, target) => {
    if (window.location.pathname === '/sections') {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      )
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault()
        var targetScroll = document.getElementById(target)
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
      }
    }
  }
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20

    var animateScroll = function() {
      currentTime += increment
      var val = easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }
    animateScroll()
  }
  var onClickSections = {}

  const { classes, dropdownHoverColor } = props
  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText='Components'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href='/'>
              <a className={classes.dropdownLink}>
                <LineStyle className={classes.dropdownIcons} /> Presentation
                Page
              </a>
            </Link>,
            <Link href='/components'>
              <a className={classes.dropdownLink}>
                <Layers className={classes.dropdownIcons} />
                All components
              </a>
            </Link>,
            <a
              href='https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial'
              target='_blank'
              className={classes.dropdownLink}
            >
              <Icon className={classes.dropdownIcons}>content_paste</Icon>
              Documentation
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText='Sections'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={ViewDay}
          dropdownList={[
            <Link href='/sections#headers'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'headers')}
              >
                <Dns className={classes.dropdownIcons} /> Headers
              </a>
            </Link>,
            <Link href='/sections#features'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'features')}
              >
                <Build className={classes.dropdownIcons} /> Features
              </a>
            </Link>,
            <Link href='/sections#blogs'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'blogs')}
              >
                <ListIcon className={classes.dropdownIcons} /> Blogs
              </a>
            </Link>,
            <Link href='/sections#teams'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'teams')}
              >
                <People className={classes.dropdownIcons} /> Teams
              </a>
            </Link>,
            <Link href='/sections#projects'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'projects')}
              >
                <Assignment className={classes.dropdownIcons} /> Projects
              </a>
            </Link>,
            <Link href='/sections#pricing'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'pricing')}
              >
                <MonetizationOn className={classes.dropdownIcons} /> Pricing
              </a>
            </Link>,
            <Link href='/sections#testimonials'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'testimonials')}
              >
                <Chat className={classes.dropdownIcons} /> Testimonials
              </a>
            </Link>,
            <Link href='/sections#contacts'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'contacts')}
              >
                <Call className={classes.dropdownIcons} /> Contacts
              </a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText='Examples'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link href='/about-us'>
              <a className={classes.dropdownLink}>
                <AccountBalance className={classes.dropdownIcons} /> About Us
              </a>
            </Link>,
            <Link href='/blog-post'>
              <a className={classes.dropdownLink}>
                <ArtTrack className={classes.dropdownIcons} /> Blog Post
              </a>
            </Link>,
            <Link href='/blog-posts'>
              <a className={classes.dropdownLink}>
                <ViewQuilt className={classes.dropdownIcons} /> Blog Posts
              </a>
            </Link>,
            <Link href='/contact-us'>
              <a className={classes.dropdownLink}>
                <LocationOn className={classes.dropdownIcons} /> Contact Us
              </a>
            </Link>,
            <Link href='/landing-page'>
              <a className={classes.dropdownLink}>
                <ViewDay className={classes.dropdownIcons} /> Landing Page
              </a>
            </Link>,
            <Link href='/login-page'>
              <a className={classes.dropdownLink}>
                <Fingerprint className={classes.dropdownIcons} /> Login Page
              </a>
            </Link>,
            <Link href='/pricing'>
              <a className={classes.dropdownLink}>
                <AttachMoney className={classes.dropdownIcons} /> Pricing Page
              </a>
            </Link>,
            <Link href='/shopping-cart-page'>
              <a className={classes.dropdownLink}>
                <ShoppingBasket className={classes.dropdownIcons} /> Shopping
                Cart
              </a>
            </Link>,
            <Link href='/ecommerce-page'>
              <a className={classes.dropdownLink}>
                <Store className={classes.dropdownIcons} /> Ecommerce Page
              </a>
            </Link>,
            <Link href='/product-page'>
              <a className={classes.dropdownLink}>
                <ShoppingCart className={classes.dropdownIcons} /> Product Page
              </a>
            </Link>,
            <Link href='/profile-page'>
              <a className={classes.dropdownLink}>
                <AccountCircle className={classes.dropdownIcons} /> Profile Page
              </a>
            </Link>,
            <Link href='/signup-page'>
              <a className={classes.dropdownLink}>
                <PersonAdd className={classes.dropdownIcons} /> Signup Page
              </a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Button
          href='https://www.creative-tim.com/product/material-kit-pro-react'
          color={window.innerWidth < 960 ? 'info' : 'white'}
          target='_blank'
          className={classes.navButton}
          round
        >
          <ShoppingCart className={classes.icons} /> buy now
        </Button> */}
      </ListItem>
    </List>
  )
}

HeaderLinks.defaultProps = {
  hoverColor: 'primary',
}

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    'dark',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
  ]),
}

export default withStyles(headerLinksStyle)(HeaderLinks)
