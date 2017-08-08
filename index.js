function countdown(callback) {
  window.setTimeout(callback, 2)
}

function createMultiplier(multiplierValue) {
  return function (num) {
    return num * multiplierValue
  }
}
var doubler = new createMultiplier(2)
var tripler = new createMultiplier(3)

function multiplier(value1, value2) {
  return value1 * value2
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
