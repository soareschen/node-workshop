
var fs = require('fs')
var url = require('url')
var http = require('http')
var pathLib = require('path')

var dirHandler = function(request, response) {
  var path = url.parse(request.url).pathname
  var filePath = pathLib.join('sample', path)

  fs.stat(filePath, function(err, stats) {
    if(err || !stats.isFile()) {
      response.writeHead(404)
      response.end()
    } else {
      response.writeHead(200)
      fs.createReadStream(filePath).pipe(response)
    }
  })
}

http.createServer(dirHandler).listen(8080)