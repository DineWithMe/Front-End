import { gql } from 'apollo-boost'

const userExist = gql`
  query($query: String) {
    userExist(query: $query) {
      name
    }
  }
`
const emailExist = gql`
  query($query: String) {
    emailExist(query: $query) {
      name
    }
  }
`

const verifyToken = gql`
  query {
    verifyToken {
      userToken
    }
  }
`
export { userExist, emailExist, verifyToken }
