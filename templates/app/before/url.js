const beanifyUrl = require('beanify-url')

module.exports = async function (beanify, opts) {
  beanify.register(beanifyUrl)
}
