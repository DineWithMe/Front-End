import { Container } from 'unstated'
// cookies
import Cookies from 'js-cookie'
import { USER_SESSION } from '../constants/cookies'

const initialState = {
  login: false,
  userId: '',
  name: '',
  username: '',
  userToken: '',
}

const initialData = {
  email: '',
  password: '',
}

class UserStateContainer extends Container {
  state = initialState
  data = initialData
  setUserState = (state) => {
    this.setState(state)
  }
  // these methods doesn't need setState as they do not require rendering when run
  initUserState = (state) => {
    this.state = state
  }
  resetUserState = (setState) => {
    if (setState) {
      this.setState(initialState)
      process.browser && Cookies.remove(USER_SESSION)
    } else {
      this.initUserState(initialState)
    }
  }
}
const userStateStore = new UserStateContainer()
export { UserStateContainer, userStateStore }
