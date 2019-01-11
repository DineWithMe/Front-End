import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import getConfig from 'next/config'
import { createUploadLink } from 'apollo-upload-client'
const { publicRuntimeConfig } = getConfig()

export const initApollo = (initialState, userToken) => {
  let uri = ''

  if (publicRuntimeConfig.env === 'development') {
    uri = 'http://localhost:4000'
  } else if (publicRuntimeConfig.env === 'production') {
    uri = 'https://node.tylim.com'
  }
  // create link for apollo upload
  const link = createUploadLink({
    uri, //Server URL (must be absolute)
    credentials: 'same-origin', //Additional fetch() options like `credential` or `headers`
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  })
  let apolloClient = null

  //create apollo client
  const getClient = (initialState, link) => {
    return new ApolloClient({
      link,
      ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
      connectToDevTools: process.browser,
      cache: new InMemoryCache().restore(initialState || {}),
    })
  }
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return getClient(initialState, link)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = getClient(initialState, link)
  }

  return apolloClient
}
