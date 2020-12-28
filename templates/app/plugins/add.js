const bp = require('beanify-plugin')

module.exports = bp(async function (beanify, opts) {
  beanify.decorate('add', function (a, b) {
    return a + b
  })
})
