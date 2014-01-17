
var url = require('url')
var http = require('http')

var fooHandler = function(request, response) {
  response.writeHead(200)
  response.write('Foo Handler')
  response.end()
}

var barHandler = function(request, response) {
  response.writeHead(200)
  response.write('Bar Handler')
  response.end()
}

var routes = {
  '/foo': fooHandler,
  '/bar': barHandler
}

var routerHandler = function(request, response) {
  var path = url.parse(request.url).pathname
  var handler = routes[path]
  if(handler) {
    handler(request, response)
  } else {
    response.writeHead(404)
    response.end()
  }
}

http.createServer(routerHandler).listen(8080)