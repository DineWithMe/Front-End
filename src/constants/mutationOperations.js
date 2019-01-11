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
        username
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

export { createUser, login, uploadUserAvatar }
