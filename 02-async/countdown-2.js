
var countDown = function(ticks, interval, tickCallback, callback) {
  if(ticks == 0) return callback()

  setTimeout(function() {
    tickCallback(ticks)
    countDown(ticks-1, interval, tickCallback, callback)
  }, interval)
}

countDown(10, 1000, 
  function(tick) {
    console.log('Counting down for new year..', tick, 'more ticks left')
  },
  function() {
    console.log('Happy New Year!')
  })


countDown(15, 500, 
  function(tick) {
    console.log('Counting down for birthday..', tick, 'more ticks left')
  },
  function() {
    console.log('Happy Birthday!')
  })