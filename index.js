/*
 * Primary file for API
 *
 */

// Dependencies
var http = require('http')
var url = require('url')
var StringDecoder = require('string_decoder').StringDecoder

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var path = parsedUrl.pathname
  var trimmedPath = path.replace(/^\/+|\/+$/g, '')
  var parseedQueryObj = parsedUrl.query
  var method = req.method.toLowerCase()
  var decoder = new StringDecoder('utf-8')
  var buffer = ''
  req.on('data', function (data) {
    buffer += decoder.write(data)
  })

  req.on('end', function () {
    buffer += decoder.end()

    res.end('Hello World\n')
    console.log(
      'Request received with this payload: ' + buffer
      //   trimmedPath +
      //   ' method : ' +
      //   method +
      //   ' q ',
      // parseedQueryObj
    )
  })
})

server.listen(4000, function () {
  console.log('The server is listening on port 4000 now')
})
