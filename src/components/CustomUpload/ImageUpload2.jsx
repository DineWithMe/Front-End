import { Component } from 'react'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
// Apollo
import { Mutation, Query } from 'react-apollo'
import { uploadUserAvatar } from '../../constants/mutationOperations'
import { userAvatar } from '../../constants/queryOperations'
// material ui components
import Tooltip from '@material-ui/core/Tooltip'
// nodejs library that concatenates classes
import classNames from 'classnames'
// image
import defaultAvatar from '../../../static/img/faces/default-avatar.png'
import loadingGif from '../../../static/img/gif/loading.gif'
// error
import handleError from '../../utils/handleError'
// unstated
import { userStateStore } from '../../utils/unstated'
// constant
import { USER_AVATAR } from '../../constants/folder'

const { publicRuntimeConfig } = getConfig()
class ImageUpload2 extends Component {
  state = { file: '' }
  render() {
    const {
      props: { classes },
    } = this
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    return (
      <>
        <Mutation mutation={uploadUserAvatar}>
          {(uploadUserAvatar) => (
            <input
              type='file'
              ref={(fileInput) => {
                this.fileInput = fileInput
              }}
              style={{ display: 'none' }}
              onChange={async (e) => {
                if (e.target.validity.valid) {
                  const reader = new FileReader()
                  const file = e.target.files[0]
                  try {
                    // need catch because this will be error if user cancel the to input any file
                    reader.readAsDataURL(file)
                  } catch (err) {
                    // stop if user cancel
                    return
                  }
                  reader.onloadend = () => {
                    this.setState({
                      file,
                      imagePreviewUrl: reader.result,
                    })
                  }
                  // remember this is a promise
                  await uploadUserAvatar({ variables: { file } }).catch((err) =>
                    handleError(err)
                  )
                  this.refetch()
                }
              }}
              accept='image/png, image/jpeg'
            />
          )}
        </Mutation>
        <Query
          query={userAvatar}
          variables={{ username: userStateStore.state.username }}
          notifyOnNetworkStatusChange
        >
          {({ data, refetch, loading }) => {
            const {
              user: { avatarFilename },
            } = data

            let src = ''

            // do not use setState because setState is too slow for getInitialProps
            if (loading) {
              src = loadingGif
            } else if (avatarFilename) {
              src = `${
                publicRuntimeConfig.serverPage
              }${USER_AVATAR}${avatarFilename}`
            } else {
              src = defaultAvatar
            }
            return (
              <Tooltip
                title='Change Your Avatar'
                placement='right-end'
                classes={{ tooltip: classes.tooltip }}
              >
                <img
                  src={src}
                  alt='user avatar'
                  className={imageClasses}
                  ref={(img) => {
                    this.img = img
                    this.refetch = refetch
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    this.fileInput.click()
                  }}
                  onError={(e) => {
                    // this only work in client side
                    // unsure why
                    e.target.src = defaultAvatar
                  }}
                />
              </Tooltip>
            )
          }}
        </Query>
      </>
    )
  }
}
ImageUpload2.propTypes = {
  classes: PropTypes.object,
}
export default ImageUpload2
