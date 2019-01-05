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

const verifyEmail = gql`
  query {
    me {
      name
      username
    }
  }
`
export { userExist, emailExist, verifyEmail }
