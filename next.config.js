const withCSS = require('@zeit/next-css')
const withSASS = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const nextConfig = {
  distDir: 'build',
  serverRuntimeConfig: {
    // https://github.com/zeit/next.js#exposing-configuration-to-the-server--client-side
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    googleMap_apiKey: process.env.GOOGLEMAP_APIKEY, // Pass through env variables
    service_worker: process.env.SERVICE_WORKER,
    reCAPTCHA_apiKey: process.env.RECAPTCHA_APIKEY,
  },
  webpack: (config) => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/,
          },
        ],
      })
    )

    return config
  },
}
module.exports = withPlugins(
  [
    [withSASS],
    [withCSS],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 65,
        },
        optimizeImagesInDev: process.env.IMAGE_OPTIMIZATION,
      },
    ],
  ],
  nextConfig
)
