var names = ['Alice', 'Bob', 'Carl']

var createGreeter = function(greet) {
  var greeter = function(name) {
    console.log(greet + ',', name)
  }

  return greeter
}

names.forEach(createGreeter('Hello'))
names.forEach(createGreeter('Bonjour'))