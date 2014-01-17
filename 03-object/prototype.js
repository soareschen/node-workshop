
var Person = function(name) {
  this.name = name
}

Person.prototype.greet = function() {
  console.log('Hello, my name is', this.name)
}

var alice = new Person('Alice')
var bob = new Person('Bob')

alice.greet()
bob.greet()