var compose = function(f1, f2) {
  var composed = function(arg) {
    return f1(f2(arg))
  }

  return composed
}

var plusTwo = function(num) {
  return num+2
}

var timesThree = function(num) {
  return num*3
}

var composed1 = compose(plusTwo, timesThree)
console.log('2+3*5 =', composed1(5))

var composed2 = compose(timesThree, plusTwo)
console.log('3*(2+5) = ', composed2(5))

var composed3 = compose(plusTwo, 
  compose(timesThree, plusTwo))

console.log('2+3*(2+5) = ', composed3(5))