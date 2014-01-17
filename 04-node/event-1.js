
var events = require('events')

var emitter = new events.EventEmitter()

var result = 1
emitter.on('tick', function() {
  result = result * 2
  console.log('One tick triggered, result is now', result)
})

setInterval(function() {
  emitter.emit('tick')
}, 1000)