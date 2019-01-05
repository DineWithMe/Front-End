import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

let apolloClient = null

let uri

if (publicRuntimeConfig.env === 'development') {
  uri = 'http://localhost:4000'
} else if (publicRuntimeConfig.env === 'production') {
  uri = 'https://node.tylim.com'
}

//create apollo client
const getClient = (initialState, userToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri, //Server URL (must be absolute)
      credentials: 'same-origin', //Additional fetch() options like `credential` or `headers`
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }),
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    connectToDevTools: process.browser,
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export const initApollo = (initialState, userToken) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return getClient(initialState, userToken)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = getClient(initialState, userToken)
  }

  return apolloClient
}
