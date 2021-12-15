// Build a Car class!
exports.giveTrue = function () {
  return true
}
exports.sum = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "don't be ridiculous"
  }
  return a + b
}
exports.buildUser = function (username) {
  return { username, foo: 'bar' }
}
