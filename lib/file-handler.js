
var fs = require('fs')

var createFileHandler = function(filePath, contentType) {
  var handler = function(request, response) {
    if(contentType) response.setHeader('Content-Type', contentType)

    response.writeHead(200)
    fs.createReadStream(filePath).pipe(response)
  }
  return handler
}

module.exports = {
  createFileHandler: createFileHandler
}