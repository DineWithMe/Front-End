import { Component } from 'react'
import Head from 'next/head'
// apollo
import { initApollo } from './initApollo'
import { getDataFromTree } from 'react-apollo'
// unstated
import { userStateStore } from './unstated'
// jwt
import jwt from 'jsonwebtoken'

export default (App) => {
  return class Apollo extends Component {
    static displayName = 'withApollo(App)'
    static async getInitialProps(context) {
      const { Component, router } = context
      let appProps = {}
      let userState
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(context)
      }
      // cant find documentation of this code, but seem to be standard
      // marked as to ask in forum #1

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

        const isJwtExist = cookie.split('=')[1]

        if (isJwtExist) {
          const userInfo = jwt.decode(isJwtExist)
          userState = {
            login: true,
            ...userInfo,
            jwt: isJwtExist,
          }
          userStateStore.initUserState(userState)
        }
      }
      // it will still able to initApollo with correct jwt on client side
      // the first time page loaded on client, get initial prop will not run
      // but constructor will run and hydrate unstated
      const apolloClient = initApollo(undefined, userStateStore.getState().jwt)
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
        userState,
      }
    }
    constructor(props) {
      super(props)
      // hydrate state in client
      // serverInitialState value preserve from server to client before user navigate another next/link
      // use this chance to hydrate the state
      userStateStore.initUserState({ login: true, ...props.userState })

      this.apolloClient = initApollo(props.apolloState, props.userState.jwt)
    }
    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}
