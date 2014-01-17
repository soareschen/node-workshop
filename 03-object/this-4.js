
'use strict'

var Person = function(name) {
  this.name = name
}

Person.prototype.greetFromClosure = function() {
  var doGreet = function() {
    console.log('In greetFromClosure(), this is', this)
    console.log("Hello, my name is", this.name)
  }

  doGreet()
}

var alice = new Person('Alice')

alice.greetFromClosure()
