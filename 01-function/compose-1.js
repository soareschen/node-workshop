
var compose = function(f1, f2) {
  var composed = function(arg) {
    return f1(f2(arg))
  }

  return composed
}