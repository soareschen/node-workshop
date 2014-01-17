
var events = require('events')

var emitter = new events.EventEmitter()

var exponentTicker = function(event, exponent) {
  var result = 1
  event.on('tick', function() {
    result = result * exponent
    console.log('One tick triggered, result is now', result)
  })
}

exponentTicker(emitter, 2)
exponentTicker(emitter, 0.9)

setInterval(function() {
  emitter.emit('tick')
}, 1000)