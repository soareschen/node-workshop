var name = 'John'

var inside = function() {
  var name = 'Paul'

  console.log('My name inside is', name)
}

console.log('My name outside is', name)
inside()
console.log('My name outside is', name)