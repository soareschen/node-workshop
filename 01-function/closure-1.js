
var createSpeaker = function(name) {
  var speaker = function() {
    console.log('My name is', name)
  }

  return speaker
}

var john = createSpeaker('John')
var paul = createSpeaker('Paul')

john()
paul()