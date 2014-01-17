
var fs = require('fs')
var http = require('http')

var createFileHandler = function(filePath) {
  var fileHandler = function(request, response) {
    fs.createReadStream(filePath).pipe(response)
  }

  return fileHandler
}

var fileHandler = createFileHandler('../sample/sample-1.txt')

http.createServer(fileHandler).listen(8080)