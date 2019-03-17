const routes = require('next-routes')

module.exports = routes()                           // ----   ----      -----
.add('about')                                       // about  about     /about
.add('rooms', '/rooms/:slug')                         // blog   blog      /blog/:slug
