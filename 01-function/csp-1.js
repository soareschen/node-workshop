
var addAsync = function(first, second, callback) {
  var result = first + second
  callback(result)
}

addAsync(1, 2, function(result) {
  console.log('1 + 2 =', result)
})