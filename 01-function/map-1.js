var map = function(array, mapper) {
  if(array.length == 0) return []

  var mappedElement = mapper(array[0])
  var restMapped = map(array.slice(1), mapper)

  return [mappedElement].concat(restMapped)
}

var array = ['alice', 'bob', 'carl']

var result = map(array, function(name) {
  return name.toUpperCase()
})

console.log(result)