var mapAsync = function(array, mapperAsync, callback) {
  if(array.length == 0) return callback(null, [])

  mapperAsync(array[0], function(err, mappedElement) {
    if(err) return callback(err)

    mapAsync(array.slice(1), mapperAsync, function(err, restMapped) {
      if(err) return callback(err)

      var result = [mappedElement].concat(restMapped)
      callback(null, result)
    })
  })
}

var array = ['alice', 'bob', 'carl']

mapAsync(array, function(name, callback) {
  callback(null, name.toUpperCase())
}, function(err, result) {
  if(err) throw err

  console.log(result)
})