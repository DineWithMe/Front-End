const withCSS = require('@zeit/next-css')
const withSASS = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withImages(
  withSASS(
    withCSS({
      serverRuntimeConfig: {
        // https://github.com/zeit/next.js#exposing-configuration-to-the-server--client-side
        // Will only be available on the server side
        googleMap_apiKey: process.env.GOOGLEMAP_APIKEY, // Pass through env variables
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        googleMap_apiKey: process.env.GOOGLEMAP_APIKEY,
      },
    })
  )
)
//   {
//   webpack: (config, {}) => {
//     config.module.rules.push({
//       test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//       loader: 'url-loader?limit=100000',
//     })

//     return config
//   },
// }
