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

var plusTwo = function(num) {
  return num+2
}

var timesThree = function(num) {
  return num*3
}

var composed = compose([plusTwo, timesThree, plusTwo])

console.log('2+3*(2+5) = ', composed(5))