
var chain = require('stack-chain')

module.exports = function hideStackFramesFrom() {
  [].forEach.call(arguments, function(name) {
    chain.filter.attach(function(error, frames) {
      return frames.filter(function(frame) {
        var f = frame.getFileName()
        if (name instanceof RegExp) {
            return !name.test(f)
        }
        return f.indexOf('node_modules/' + name + '/') === -1 &&
               f.indexOf('node_modules\\' + name + '\\') === -1
      })
    })
  })
  return hideStackFramesFrom
}
