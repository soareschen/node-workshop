
var fs = require('fs')
var http = require('http')

var fileHandler = function(request, response) {
  fs.createReadStream('../sample/sample-1.txt').pipe(response)
}

http.createServer(fileHandler).listen(8080)