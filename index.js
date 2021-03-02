/*
 * Primary file for API
 *
 */

// Dependencies
var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var path = parsedUrl.pathname
  var trimmedPath = path.replace(/^\/+|\/+$/g, '')
  res.end('Hello World\n')

  var method = req.method.toLowerCase()
  console.log(
    'Request received on path: ' + trimmedPath + ' method : ' + method
  )
})

server.listen(4000, function () {
  console.log('The server is listening on port 4000 now')
})
