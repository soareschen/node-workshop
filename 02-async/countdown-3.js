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

var countDownForNewYear = function(callback) {
  countDown(10, 1000, 
    function(tick) {
      console.log('Counting down for new year..', tick, 'more ticks left')
    },
    function() {
      console.log('Happy New Year!')
      callback()
    })
}

var countDownForBirthday = function(callback) {
  countDown(15, 500, 
    function(tick) {
      console.log('Counting down for birthday..', tick, 'more ticks left')
    },
    function() {
      console.log('Happy Birthday!')
      callback()
    })
}

async.series({
  newyear: countDownForNewYear,
  birthday: countDownForBirthday
}, function() {
  async.parallel({
    newyear: countDownForNewYear,
    birthday: countDownForBirthday
  }, function() {
    console.log('Parties over!')
  })
})