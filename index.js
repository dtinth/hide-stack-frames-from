
var chain = require('stack-chain')

module.exports = function hideStackFramesFrom() {
  [].forEach.call(arguments, function(name) {
    chain.filter.attach(function(error, frames) {
      return frames.filter(function(frame) {
        var f = frame.getFileName()
        return f.indexOf('node_modules/' + name + '/') === -1 &&
               f.indexOf('node_modules\\' + name + '\\') === -1
      })
    })
  })
  return hideStackFramesFrom
}
