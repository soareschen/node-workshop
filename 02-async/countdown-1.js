var countDown = function(seconds, callback) {
  if(seconds == 0) return callback()

  setTimeout(function() {
    console.log('' + seconds + '...')
    countDown(seconds-1, callback)
  }, 1000)
}

countDown(10, function() {
  console.log('Happy New Year!')
})