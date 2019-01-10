import { Component } from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
// nodejs library that concatenates classes
import classNames from 'classnames'
// image
import christian from '../../../static/img/faces/christian.jpg'

class ImageUpload2 extends Component {
  state = { file: '', imagePreviewUrl: '' }
  render() {
    const {
      props: { classes },
      state: { imagePreviewUrl },
    } = this
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    return (
      <>
        <input
          type='file'
          ref={(c) => {
            this.fileInput = c
          }}
          style={{ display: 'none' }}
          onChange={(e) => {
            const reader = new FileReader()
            const file = e.target.files[0]
            reader.onloadend = () => {
              this.setState({
                file,
                imagePreviewUrl: reader.result,
              })
            }
            reader.readAsDataURL(file)
          }}
          accept='image/png, image/jpeg'
        />
        <Tooltip
          title='Change Your Avatar'
          placement='right-end'
          classes={{ tooltip: classes.tooltip }}
        >
          <img
            src={imagePreviewUrl || christian}
            alt='...'
            className={imageClasses}
            style={{
              cursor: 'pointer',
            }}
            onClick={(e) => {
              e.preventDefault()
              this.fileInput.click()
            }}
          />
        </Tooltip>
      </>
    )
  }
}
ImageUpload2.propTypes = {
  classes: PropTypes.object,
}
export default ImageUpload2
