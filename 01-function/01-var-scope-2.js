
var name = 'John'

var closure = function() {
  name = 'Paul'

  console.log('My name in closure is', name)
}

console.log('My name outside is', name)
closure()
console.log('My name outside is now', name)