var createSpeaker = function(name) {
  var calledTimes = 0

  var speaker = function() {
    calledTimes++
    console.log('My name is', name + ',', 
      'I have been called', calledTimes, 'times')
  }

  return speaker
}

var john = createSpeaker('John')
var paul = createSpeaker('Paul')

john()
paul()
john()
john()
paul()
