import { Component } from 'react'
import Head from 'next/head'
// query constant
import { verifyToken } from '../constants/queryOperations'
// apollo
import { initApollo } from './initApollo'
import { getDataFromTree } from 'react-apollo'
// unstated
import { userStateStore, AppMethodStore } from './unstated'
// cookies
import Cookies from 'js-cookie'
import { USER_SESSION, EXPIRES } from '../constants/cookies'
// error
import handleError from './handleError'

export default (App) => {
  return class Apollo extends Component {
    static displayName = 'withApolloUnstated(App)'
    // get initial props run first before constructor
    static async getInitialProps(context) {
      const { Component, router } = context
      // unstated
      // handle cookies and state on server side
      if (!process.browser) {
        const {
          ctx: {
            req: {
              headers: { cookie },
            },
          },
        } = context
        userStateStore.resetUserState()
        if (cookie) {
          // get specific token
          const userTokenPart1 = cookie.split(`${USER_SESSION}=`)[1]
          let userToken = ''
          if (userTokenPart1) {
            userToken = userTokenPart1.split(';')[0]
          }
          // verify userToken
          await initApollo(undefined, userToken)
            .query({
              query: verifyToken,
            })
            .then((res) => {
              const { user } = res.data.verifyToken
              userStateStore.initUserState({
                login: true,
                ...user,
                userId: user.id,
                userToken,
              })
            })
            .catch((err) => handleError(err))
        }
      }
      // it will still able to initApollo with correct userToken on client side
      // the first time page loaded on client, get initial prop will not run
      // but constructor will run and hydrate unstated
      const apolloClient = initApollo(undefined, userStateStore.state.userToken)

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(context)
      }

      // run all graphql queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        try {
          // run all graphql queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apolloClient}
              userStateStore={userStateStore}
            />
          )
        } catch (error) {
          // prevent apollo client graphql errors from crashing SSR
          // handle them in component via the data.error prop
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          // eslint-disable-next-line no-console
          console.error('Error while running `getDataFromTree`', error)
        }
        // getDataFromTree does not call componentWillUnmount (source? #2)
        // head side effect therefore need to be cleared manually (source? #3)
        Head.rewind() //unknown method #4
      }
      // Extract query data from Apollo store
      const apolloState = apolloClient.cache.extract()
      if (!process.browser) {
        return {
          ...appProps,
          apolloState,
          userState: userStateStore.state,
        }
      } else {
        // this in static method is different with this of non static method
        return {
          ...appProps,
          apolloState,
        }
      }
    }

    newApolloClient = () => {
      userStateStore.resetUserState()
      const cookie = process.browser && Cookies.get(USER_SESSION)
      console.log(cookie)
      this.apolloClient = initApollo(undefined, cookie)
      // reset and refetch store
      this.apolloClient.resetStore()
      this.forceUpdate()
    }

    constructor(props) {
      super(props)
      /* eslint-disable react/prop-types */
      const {
        userState: { userToken },
        userState,
        apolloState,
      } = props
      // hydrate state in client
      // serverInitialState value preserve from server to client before user navigate another next/link
      // use this chance to hydrate the state
      if (process.browser) {
        if (userToken) {
          userStateStore.initUserState({ login: true, ...userState })
          Cookies.set(USER_SESSION, userToken, { expires: EXPIRES })
        }
      }
      this.apolloClient = initApollo(apolloState, userToken)
      AppMethodStore.newApolloClient = this.newApolloClient
    }
    render() {
      const { props, apolloClient } = this
      return (
        <App
          {...props}
          apolloClient={apolloClient}
          userStateStore={userStateStore}
        />
      )
    }
  }
}
