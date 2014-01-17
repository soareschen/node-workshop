
var createPerson = function(name) {
  var person = {
    greet: function() {
      console.log('Hello, my name is', name)
    }
  }

  return person
}

var alice = createPerson('Alice')
var bob = createPerson('Bob')

alice.greet()
bob.greet()