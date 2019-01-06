import { Container } from 'unstated'

const initialState = {
  login: false,
  name: undefined,
  username: undefined,
  userToken: undefined,
}

class UserStateContainer extends Container {
  state = initialState

  initUserState = (state) => {
    this.state = state
  }
  resetState = () => {
    this.initUserState(initialState)
  }
  setUserState = (state) => {
    this.setState(state)
  }
}
const userStateStore = new UserStateContainer()
export { UserStateContainer, userStateStore }
