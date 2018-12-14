import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
import Face from '@material-ui/icons/Face'
// core components
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import Button from '../../components/CustomButtons/Button.jsx'
import Card from '../../components/Card/Card.jsx'
import CardBody from '../../components/Card/CardBody.jsx'
import CardHeader from '../../components/Card/CardHeader.jsx'
import CustomInput from '../../components/CustomInput/CustomInput.jsx'
import CustomFooter from '../../components/Footer/CustomFooter.jsx'
// style
import loginPageStyle from '../../jss/material-kit-pro-react/views/loginPageStyle.jsx'
// image
import image from '../../../static/img/bg7.jpg'
import Navbar from '../../components/NavBar/Navbar.jsx'

class LoginPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
  render() {
    const { classes } = this.props
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
                        id='first'
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          placeholder: 'First Name...',
                          type: 'text',
                          startAdornment: (
                            <InputAdornment position='start'>
                              <Face className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        id='email'
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          placeholder: 'Email...',
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
                          placeholder: 'Password',
                          type: 'password',
                          startAdornment: (
                            <InputAdornment position='start'>
                              <Icon className={classes.inputIconsColor}>
                                lock_utline
                              </Icon>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </CardBody>
                    <div className={classes.textCenter}>
                      <Button simple color='primary' size='lg'>
                        Get started
                      </Button>
                    </div>
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
