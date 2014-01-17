
var plate = 'food'

var eatFoodFakeAsync = function(callback) {
  plate = 'bones'
  callback()
}

var eatFoodAsync = function(callback) {
  setTimeout(function() {
    plate = 'bones'
    callback()
  })
}

var randomEatFood = function(callback) {
  var eatFood = Math.random() > 0.5 ? eatFoodFakeAsync : eatFoodAsync
  eatFood(callback)
}

var checkFoodIsEaten = function() {
  if(plate == 'food') {
    console.log('food is not eaten')
  } else {
    console.log('food is eaten')
  }
}

randomEatFood(function() {
  console.log('callback called')
  checkFoodIsEaten()
})

checkFoodIsEaten()
