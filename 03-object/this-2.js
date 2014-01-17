
'use strict'

var Person = function(name) {
  this.name = name
}

Person.prototype.greet = function() {
  console.log('In greet(), this is', this)
  console.log("Hello, my name is", this.name)
}

Person.prototype.greetAsyncWrong = function() {
  setImmediate(function() {
    console.log('In greetAsyncWrong(), this is', this)
    console.log("Hello, my name is", this.name)
  })
}

Person.prototype.greetAsyncRight = function() {
  var self = this

  setImmediate(function() {
    console.log('In greetAsyncRight(), this is', this)
    console.log("Hello, my name is", self.name)
  })
}

var alice = new Person('Alice')

alice.greet()
alice.greetAsyncWrong()
alice.greetAsyncRight()
