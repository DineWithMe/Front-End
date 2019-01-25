import { gql } from 'apollo-boost'

const createUser = gql`
  mutation($data: CreateUserInput!) {
    createUser(data: $data) {
      userToken
      user {
        id
        username
        name
      }
    }
  }
`

const login = gql`
  mutation($data: LoginUserInput!) {
    login(data: $data) {
      user {
        id
        name
        email
        username
        avatarFilename
        avatarMimeType
        avatarEncoding
        updatedAt
        createdAt
      }
      userToken
    }
  }
`
const uploadUserAvatar = gql`
  mutation($file: Upload!) {
    uploadUserAvatar(file: $file) {
      avatarFilename
    }
  }
`

const updateUserIntro = gql`
  mutation($data: UpdateUserInput!) {
    updateUser(data: $data) {
      userIntro
    }
  }
`

export { createUser, login, uploadUserAvatar, updateUserIntro }
