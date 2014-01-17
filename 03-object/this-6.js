
'use strict'

var createPerson = function(name) {
  var person = { }

  person.greetAsync = function() {
    setImmediate(function() {
      console.log("Hello, my name is", name)
    })
  }

  return person
}

var alice = createPerson('Alice')
alice.greetAsync()