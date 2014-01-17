
var url = require('url')
var http = require('http')
var createFileHandler = require('../lib/file-handler').createFileHandler

var createRouter = function() {
  var routes = { }

  var router = { }
  router.static = function(path, handler) {
    routes[path] = handler
  }

  router.handler = function(request, response) {
    var path = url.parse(request.url).pathname
    var handler = routes[path]
    if(handler) {
      handler(request, response)
    } else {
      response.writeHead(404)
      response.end()
    }
  }

  return router
}

var router = createRouter()

router.static('/', function(request, response) {
  response.writeHead(200)
  response.write('Hello World!')
})

router.static('/sample-1', createFileHandler('../sample/sample-1.txt'))
router.static('/sample-2', createFileHandler('../sample/sample-2.txt'))

http.createServer(router.handler).listen(8080)
