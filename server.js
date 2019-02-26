const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    const referer = req.headers.referer || ''

    if (pathname.indexOf('/serviceworker.js') > -1) {
      const filePath = join(__dirname, '.next/serviceworker.js')
      app.serveStatic(req, res, filePath)
    } else if (pathname.includes('manifest')) {
      const filePath = join(__dirname, pathname.replace('_next', '.next'))
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
