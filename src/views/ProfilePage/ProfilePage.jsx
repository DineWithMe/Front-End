/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
// @material-ui/icons
import Camera from '@material-ui/icons/Camera'
import Palette from '@material-ui/icons/Palette'
import People from '@material-ui/icons/People'
import Add from '@material-ui/icons/Add'
// image
import oluEletu from '../../../static/img/examples/olu-eletu.jpg'
import clemOnojeghuo from '../../../static/img/examples/clem-onojeghuo.jpg'
import cynthiaDelRio from '../../../static/img/examples/cynthia-del-rio.jpg'
import mariyaGeorgieva from '../../../static/img/examples/mariya-georgieva.jpg'
import clemOnojegaw from '../../../static/img/examples/clem-onojegaw.jpg'
import darrenColeshill from '../../../static/img/examples/darren-coleshill.jpg'
import avatar from '../../../static/img/faces/avatar.jpg'
import marc from '../../../static/img/faces/marc.jpg'
import kendall from '../../../static/img/faces/kendall.jpg'
import cardProfile2Square from '../../../static/img/faces/card-profile2-square.jpg'
// style
import profilePageStyle from '../../jss/material-kit-pro-react/views/profilePageStyle.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'
// state
import { userStateStore } from '../../utils/unstated'
// core components
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import NavPills from '../../components/NavPills/NavPills.jsx'
import Card from '../../components/Card/Card.jsx'
import CardBody from '../../components/Card/CardBody.jsx'
import CardHeader from '../../components/Card/CardHeader.jsx'
import Badge from '../../components/Badge/Badge.jsx'
import Muted from '../../components/Typography/Muted.jsx'
import Clearfix from '../../components/Clearfix/Clearfix.jsx'
import Button from '../../components/CustomButtons/Button.jsx'
import Parallax from '../../components/Parallax/Parallax.jsx'
import CustomFooter from '../../components/Footer/CustomFooter.jsx'
import ImageUpload2 from '../../components/CustomUpload/ImageUpload2.jsx'

class ProfilePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
  render() {
    const { classes, ...rest } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
    return (
      <div>
        <Navbar {...rest} />
        <Parallax
          image={require('../../../static/img/examples/city.jpg')}
          filter='dark'
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <ImageUpload2 classes={classes} />
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      {userStateStore.state.name}
                    </h3>
                    <h6>DESIGNER</h6>
                    <Button
                      justIcon
                      simple
                      color='dribbble'
                      className={classes.margin5}
                    >
                      <i className={classes.socials + ' fab fa-dribbble'} />
                    </Button>
                    <Button
                      justIcon
                      simple
                      color='twitter'
                      className={classes.margin5}
                    >
                      <i className={classes.socials + ' fab fa-twitter'} />
                    </Button>
                    <Button
                      justIcon
                      simple
                      color='pinterest'
                      className={classes.margin5}
                    >
                      <i className={classes.socials + ' fab fa-pinterest'} />
                    </Button>
                  </div>
                </div>
                <div className={classes.follow}>
                  <Tooltip
                    id='tooltip-top'
                    title='Follow this user'
                    placement='top'
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      round
                      color='primary'
                      className={classes.followButton}
                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </Tooltip>
                </div>
              </GridItem>
            </GridContainer>
            <div
              className={classNames(classes.description, classes.textCenter)}
            >
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{' '}
              </p>
            </div>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color='primary'
                tabs={[
                  {
                    tabButton: 'Work',
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={7}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Latest Collections</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    'url(' + mariyaGeorgieva + ')',
                                }}
                              >
                                <a href='#pablo' />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color='warning'
                                    className={classes.badge}
                                  >
                                    Spring 2016
                                  </Badge>
                                  <a href='#pablo'>
                                    <h2 className={classes.cardTitleWhite}>
                                      Stilleto
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: 'url(' + clemOnojeghuo + ')',
                                }}
                              >
                                <a href='#pablo' />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color='info' className={classes.badge}>
                                    Spring 2016
                                  </Badge>
                                  <a href='#pablo'>
                                    <h2 className={classes.cardTitleWhite}>
                                      High Heels
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: 'url(' + oluEletu + ')',
                                }}
                              >
                                <a href='#pablo' />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color='danger'
                                    className={classes.badge}
                                  >
                                    Summer 2016
                                  </Badge>
                                  <a href='#pablo'>
                                    <h2 className={classes.cardTitleWhite}>
                                      Flats
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    'url(' + darrenColeshill + ')',
                                }}
                              >
                                <a href='#pablo' />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color='success'
                                    className={classes.badge}
                                  >
                                    Winter 2016
                                  </Badge>
                                  <a href='#pablo'>
                                    <h2 className={classes.cardTitleWhite}>
                                      Men's Sneakers
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={2}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Stats</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>60</b> Products
                            </li>
                            <li>
                              <b>4</b> Collections
                            </li>
                            <li>
                              <b>331</b> Influencers
                            </li>
                            <li>
                              <b>1.2K</b> Likes
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            French luxury footwear and fashion. The footwear has
                            incorporated shiny, red-lacquered soles that have
                            become his signature.
                          </p>
                          <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color='primary'>Footwear</Badge>
                          <Badge color='rose'>Luxury</Badge>
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: 'Connections',
                    tabIcon: People,
                    tabContent: (
                      <div>
                        <GridContainer justify='center'>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href='#pablo'>
                                      <img src={avatar} alt='...' />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: 'url(' + avatar + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Gigi Hadid
                                    </h4>
                                    <Muted>
                                      <h6>MODEL</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don't be scared of the truth because we
                                      need to restart the human foundation in
                                      truth...
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href='#pablo'>
                                      <img src={marc} alt='...' />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: 'url(' + marc + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Marc Jacobs
                                    </h4>
                                    <Muted>
                                      <h6>DESIGNER</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don't be scared of the truth because we
                                      need to restart the human foundation in
                                      truth...
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href='#pablo'>
                                      <img src={kendall} alt='...' />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: 'url(' + kendall + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Kendall Jenner
                                    </h4>
                                    <Muted>
                                      <h6>MODEL</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye. Don't
                                      be scared of the truth.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href='#pablo'>
                                      <img src={cardProfile2Square} alt='...' />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage:
                                          'url(' + cardProfile2Square + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      George West
                                    </h4>
                                    <Muted>
                                      <h6>MODEL/DJ</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </div>
                    ),
                  },
                  {
                    tabButton: 'Media',
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify='center'>
                        <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt='...'
                            src={mariyaGeorgieva}
                            className={navImageClasses}
                          />
                          <img
                            alt='...'
                            src={clemOnojegaw}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt='...'
                            src={clemOnojeghuo}
                            className={navImageClasses}
                          />
                          <img
                            alt='...'
                            src={oluEletu}
                            className={navImageClasses}
                          />
                          <img
                            alt='...'
                            src={cynthiaDelRio}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                ]}
              />
            </div>
            <Clearfix />
          </div>
        </div>
        <CustomFooter classes={classes} />
      </div>
    )
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(profilePageStyle)(ProfilePage)
