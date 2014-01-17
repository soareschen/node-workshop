
var composeTwo = function(f1, f2) {
  var composed = function(arg) {
    return f1(f2(arg))
  }

  return composed
}

var compose = function(funcs) {
  if(funcs.length == 1) return funcs[0]

  return composeTwo(funcs[0], compose(funcs.slice(1)))
}