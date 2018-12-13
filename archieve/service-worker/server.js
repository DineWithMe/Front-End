const { createServer } = require('http')
const { parse } = require('url')
const { createReadStream } = require('fs')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    // get service worker.js from custom route
    if (pathname === '/serviceWorker.js') {
      res.setHeader('content-type', 'text/javascript')
      // read it from file
      createReadStream('./src/utils/serviceWorker.js').pipe(res)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, (err) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.log('> Ready on http://localhost:3000')
  })
})
