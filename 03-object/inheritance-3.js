
var async = require('async')

var createPerson = function(name) {
  var person = { }

  person.greet = function() {
    console.log('Hello, my name is', name)
  }

  person.speak = function(sentence) {
    person.greet()
    console.log(sentence)
  }

  return person
}

var createFrench = function(name) {
  var person = Object.create(createPerson(name))

  person.greet = function() {
    console.log('Bonjour, my name is', name)
  }

  return person
}

var createSlowPoke = function(name) {
  var person = Object.create(createPerson(name))

  person.speak = function(sentence) {
    person.greet()
    var words = sentence.split(' ')

    async.eachSeries(words, function(word, callback) {
      setTimeout(function() {
        console.log(word)
        callback()
      }, 1000)
    })
  }

  return person
}

var alice = createPerson('Alice')
var bob = createFrench('Bob')
var carl = createSlowPoke('Carl')

alice.greet()
alice.speak('Node.js is fun!')

bob.greet()
bob.speak('Node.js is fun!')

carl.greet()
carl.speak('Node.js is fun!')
