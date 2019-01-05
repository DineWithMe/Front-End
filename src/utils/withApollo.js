import { Component } from 'react'
import Head from 'next/head'
// query constant
import { verifyEmail } from '../constants/queryOperations'
// apollo
import { initApollo } from './initApollo'
import { getDataFromTree } from 'react-apollo'
// unstated
import { userStateStore } from './unstated'
// cookies
import Cookies from 'js-cookie'
import { USER_SESSION, EXPIRES } from '../constants/cookies'

export default (App) => {
  return class Apollo extends Component {
    static displayName = 'withApollo(App)'
    static async getInitialProps(context) {
      const { Component, router } = context
      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(context)
      }
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

        if (cookie) {
          const userToken = cookie.split('=')[1]

          // verify userToken
          await initApollo(undefined, userToken)
            .query({
              query: verifyEmail,
            })
            .then((res) => {
              userStateStore.initUserState({
                login: true,
                ...res.data,
                userToken,
              })
            })
            .catch(() => {})
        }
      }
      // it will still able to initApollo with correct userToken on client side
      // the first time page loaded on client, get initial prop will not run
      // but constructor will run and hydrate unstated
      const apolloClient = initApollo(
        undefined,
        userStateStore.getState().userToken
      )
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

      return {
        ...appProps,
        apolloState,
        userState: userStateStore.getState(),
      }
    }
    constructor(props) {
      super(props)
      const {
        userState: { userToken },
        userState,
      } = props
      // hydrate state in client
      // serverInitialState value preserve from server to client before user navigate another next/link
      // use this chance to hydrate the state
      userStateStore.initUserState({ login: true, ...userState })
      if (process.browser && userToken) {
        Cookies.set(USER_SESSION, userToken, { expires: EXPIRES })
      }
      this.apolloClient = initApollo(props.apolloState, userToken)
    }
    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}
