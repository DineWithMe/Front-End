import { gql } from 'apollo-boost'

const searchUser = gql`
  query($query: String) {
    users(query: $query) {
      name
      email
    }
  }
`
export { searchUser }
