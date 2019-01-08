import getConfig from 'next/config'
// unstated
import { userStateStore } from './unstated'

const { publicRuntimeConfig } = getConfig()

const redirectIndex = async (ctx, needToken) => {
  if (!process.browser) {
    const { res } = ctx
    if (
      (needToken && !userStateStore.state.userToken) ||
      (!needToken && userStateStore.state.userToken)
    ) {
      res.writeHead(302, { Location: publicRuntimeConfig.indexPage })
      res.end()
    }
  }
}

export default redirectIndex
