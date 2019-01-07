import getConfig from 'next/config'
// unstated
import { userStateStore } from './unstated'
// error
import handleError from './handleError'
// jwt
import jwt from 'jsonwebtoken'
import { USER_SESSION } from '../constants/cookies'
// query constant
import { verifyToken } from '../constants/queryOperations'
// apollo
import { initApollo } from './initApollo'

const { publicRuntimeConfig } = getConfig()

const redirectIndex = async (ctx) => {
  if (!process.browser) {
    const {
      req: {
        headers: { cookie },
      },
      res,
    } = ctx
    // handle cookies and state on server side
    // it will still able to initApollo with correct userToken on client side
    // the first time page loaded on client, get initial prop will not run
    // but constructor will run and hydrate unstated
    userStateStore.resetUserState()
    if (cookie) {
      // get specific token
      const userToken = cookie.split(`${USER_SESSION}=`)[1].split(';')[0]
      // verify userToken and grab new token if any
      await initApollo(undefined, userToken)
        .query({
          query: verifyToken,
        })
        .then((respond) => {
          const { name, username } = jwt.decode(
            respond.data.verifyToken.userToken
          )

          userStateStore.initUserState({
            login: true,
            name,
            username,
            userToken,
          })
          // weird, if destructuring writeHead and end from res, it will result in error
          res.writeHead(302, { Location: publicRuntimeConfig.indexPage })
          res.end()
        })
        .catch((err) => handleError(err))
    }
  }
}

export default redirectIndex
