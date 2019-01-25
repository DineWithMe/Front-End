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
    emailExist(email: $email) {
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
    me {
      id
      name
      email
      username
      avatarFilename
      avatarMimeType
      avatarEncoding
      userIntro
      updatedAt
      createdAt
    }
  }
`

const userIntro = gql`
  query($username: String!) {
    user(username: $username) {
      userIntro
    }
  }
`

export { user, emailExist, verifyToken, userAvatar, me, userIntro }
