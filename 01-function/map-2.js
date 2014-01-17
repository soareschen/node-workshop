
var mapAsync = function(array, mapperAsync, callback) {
  if(array.length == 0) return callback([])

  mapperAsync(array[0], function(mappedElement) {
    mapAsync(array.slice(1), mapperAsync, function(restMapped) {
      var result = [mappedElement].concat(restMapped)
      callback(result)
    })
  })
}

var array = ['alice', 'bob', 'carl']

mapAsync(array, function(name, callback) {
  callback(name.toUpperCase())
}, function(result) {
  console.log(result)
})