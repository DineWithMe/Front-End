// constant
import getConfig from 'next/config'
import { USER_AVATAR } from '../constants/folder'

const { publicRuntimeConfig } = getConfig()

const getAvatarFilePath = (filename) => {
  return `${publicRuntimeConfig.serverPage}${USER_AVATAR}${filename}`
}

export { getAvatarFilePath }
