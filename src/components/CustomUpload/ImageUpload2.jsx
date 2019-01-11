import { Component } from 'react'
import PropTypes from 'prop-types'
// Apollo
import { Mutation } from 'react-apollo'
import { uploadFile } from '../../constants/mutationOperations'
// material ui components
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
      <Mutation mutation={uploadFile}>
        {(uploadFile, { data }) => (
          <>
            <input
              type='file'
              ref={(c) => {
                this.fileInput = c
              }}
              style={{ display: 'none' }}
              onChange={(e) => {
                if (e.target.validity.valid) {
                  const reader = new FileReader()
                  const file = e.target.files[0]
                  try {
                    reader.readAsDataURL(file)
                  } catch (err) {
                    // this will be error if user cancel the to input any file
                    // return and stop executing in case error

                    return err
                  }
                  reader.onloadend = () => {
                    this.setState({
                      file,
                      imagePreviewUrl: reader.result,
                    })
                  }
                  uploadFile({ variables: { file } })

                  console.log(reader.result)
                }
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
        )}
      </Mutation>
    )
  }
}
ImageUpload2.propTypes = {
  classes: PropTypes.object,
}
export default ImageUpload2
