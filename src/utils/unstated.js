import { Container } from 'unstated'

class UserStateContainer extends Container {
  state = {
    login: false,
    name: undefined,
    username: undefined,
    jwt: undefined,
  }
  initUserState = (state) => {
    this.state = state
  }
  setUserState = (state) => {
    this.setState(state)
  }

  getState = () => this.state
}
const userStateStore = new UserStateContainer()
export { UserStateContainer, userStateStore }
