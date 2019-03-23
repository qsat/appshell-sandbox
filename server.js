const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')
const next = require('next')

const routes = require('./routes')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    if (pathname.indexOf('/service-worker.js') > -1) {
      const filePath = join(__dirname, '.next/service-worker.js')
      app.serveStatic(req, res, filePath)
    } else if (pathname === '/manifest.json') {
      const filePath = join(__dirname, '.next', pathname)
      app.serveStatic(req, res, filePath)
    } else {
      handle(req, res, parsedUrl)
    }
  })
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
