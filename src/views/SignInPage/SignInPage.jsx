import React from 'react'
// state
import { userStateStore } from '../../utils/unstated'
// type react properties
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
import Lock from '@material-ui/icons/Lock'
// style
import loginPageStyle from '../../jss/material-kit-pro-react/views/loginPageStyle.jsx'
// image
import image from '../../../static/img/bg7.jpg'
import Navbar from '../../components/NavBar/Navbar.jsx'
// core components
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import Button from '../../components/CustomButtons/Button.jsx'
import Card from '../../components/Card/Card.jsx'
import CardBody from '../../components/Card/CardBody.jsx'
import CardHeader from '../../components/Card/CardHeader.jsx'
import CustomInput from '../../components/CustomInput/CustomInput.jsx'
import CustomFooter from '../../components/Footer/CustomFooter.jsx'
import LoginButton from '../../components/CustomButtons/LoginButton.js'

class LoginPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
  render() {
    const {
      props: { classes },
    } = this
    return (
      <div>
        <Navbar />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: 'url(' + image + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader
                      color='primary'
                      signup
                      className={classes.cardHeader}
                    >
                      <h4 className={classes.cardTitle}>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          color='transparent'
                          className={classes.iconButtons}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fab fa-twitter' />
                        </Button>
                        <Button
                          justIcon
                          color='transparent'
                          className={classes.iconButtons}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fab fa-facebook' />
                        </Button>
                        <Button
                          justIcon
                          color='transparent'
                          className={classes.iconButtons}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fab fa-google-plus-g' />
                        </Button>
                      </div>
                    </CardHeader>
                    <p
                      className={`${classes.description} ${classes.textCenter}`}
                    >
                      Or Be Classical
                    </p>
                    <CardBody signup>
                      <CustomInput
                        id='email'
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          onChange: (e) => {
                            userStateStore.data.emailOrUsername = e.target.value.toLowerCase()
                          },
                          placeholder: 'Email or Username',
                          type: 'email',
                          startAdornment: (
                            <InputAdornment position='start'>
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        id='pass'
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          onChange: (e) => {
                            userStateStore.data.password = e.target.value
                          },
                          placeholder: 'Password',
                          type: 'password',
                          startAdornment: (
                            <InputAdornment position='start'>
                              <Lock className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </CardBody>
                    <LoginButton classes={classes} />
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <CustomFooter classes={classes} />
        </div>
      </div>
    )
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(loginPageStyle)(LoginPage)
