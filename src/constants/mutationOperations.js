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
const uploadFile = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file) {
      filename
    }
  }
`

export { createUser, login, uploadFile }
