const routes = require('next-routes')

module.exports = routes()                           // ----   ----      -----
.add('about')                                       // about  about     /about
.add('rooms', '/rooms/')                         // blog   blog      /blog/:slug
.add('room', '/rooms/:slug')                         // blog   blog      /blog/:slug
