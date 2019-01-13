import { Container } from 'unstated'

const initialState = {
  login: false,
  userId: '',
  name: '',
  email: '',
  username: '',
  avatarFilename: '',
  avatarMimeType: '',
  avatarEncoding: '',
  updatedAt: '',
  createdAt: '',
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
  resetUserState = () => {
    this.initUserState(initialState)
  }
}
const userStateStore = new UserStateContainer()

class AppMethodContainer extends Container {}

const AppMethodStore = new AppMethodContainer()

export { UserStateContainer, userStateStore, AppMethodStore }
