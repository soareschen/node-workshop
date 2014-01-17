
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_Revisited

var Person = function(name) {
  this.name = name
}

Person.prototype.greet = function() {
  console.log('Hello, my name is', this.name)
}

var alice = new Person('Alice')
alice.greet()

var bob = Object.create(Person.prototype)
Person.call(bob, 'Bob')

bob.greet()