// set properties type
import PropTypes from 'prop-types'
// core components
import Footer from './Footer'

// material ui components
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const CustomFooter = (props) => {
  const { classes } = props

  return (
    <Footer
      content={
        <div>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a className={classes.block}>{`About us`}</a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} {`Dine With Me`}
          </div>
        </div>
      }
    />
  )
}

CustomFooter.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default CustomFooter
