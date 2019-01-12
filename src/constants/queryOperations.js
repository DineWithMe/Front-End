import { gql } from 'apollo-boost'

const user = gql`
  query($username: String!) {
    user(username: $username) {
      name
    }
  }
`
const emailExist = gql`
  query($email: String!) {
    emailExist(email: $query) {
      name
    }
  }
`

const verifyToken = gql`
  query {
    verifyToken {
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
const userAvatar = gql`
  query($username: String!) {
    user(username: $username) {
      avatarFilename
    }
  }
`

const me = gql`
  query {
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
  }
`

export { user, emailExist, verifyToken, userAvatar, me }
