
var fs = require('fs')
var url = require('url')
var http = require('http')
var pathLib = require('path')

var createDirHandler = function(basePath) {
  var dirHandler = function(request, response) {
    var path = url.parse(request.url).pathname
    var filePath = pathLib.join(basePath, path)

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

  return dirHandler
}

var dirHandler = createDirHandler('sample')

http.createServer(dirHandler).listen(8080)