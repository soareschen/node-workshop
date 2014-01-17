
var greet = function() {
  console.log("Hello, my name is", this.name)
}

var alice = {
  name: "Alice",
  greet: greet
}

var prototype = {
  greet: greet
}

var Person = function(name) {
  this.name = name
}

Person.prototype = prototype

var bob = new Person('Bob')

var carl = Object.create(prototype)
carl.name = 'Carl'

greet()
alice.greet()
bob.greet()
carl.greet()