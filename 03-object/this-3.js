
'use strict'

var Person = function(name) {
  this.name = name
}

var callImmediate = function(callback) {
  callback()
}

Person.prototype.greetImmediate = function() {
  callImmediate(function() {
    console.log('In greetImmediate(), this is', this)
    console.log("Hello, my name is", this.name)
  })
}

var alice = new Person('Alice')

alice.greetImmediate()
