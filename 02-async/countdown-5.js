
var async = require('async')

var countDown = function(ticks, interval, tickCallback, callback) {
  var doCountDown = function(ticks) {
    if(ticks == 0) return callback()

    setTimeout(function() {
      tickCallback(ticks)
      doCountDown(ticks-1)
    }, interval)
  }
  
  doCountDown(ticks)
}

var createCountDownEvent = function(ticks, interval, tickMessage, endMessage) {
  var totalTicks = 0

  var countDownEvent = function(callback) {
    countDown(ticks, interval, 
      function(tick) {
        totalTicks++
        console.log(tickMessage, tick)
      },
      function() {
        console.log(endMessage)
        console.log('Total ticks:', totalTicks)
        callback()
      })
  }

  return countDownEvent
}

var countDownForNewYear = createCountDownEvent(10, 1000, 
  'Counting down for new year.. Ticks remaining:',
  'Happy New Year!')

var countDownForBirthday = createCountDownEvent(15, 500,
  'Counting down for birthday.. Ticks remaining:',
  'Happy Birthday!')

var tasks = [countDownForNewYear, countDownForBirthday, countDownForNewYear, countDownForBirthday]

async.parallel(tasks, function() {
  console.log('Parties over!')
})