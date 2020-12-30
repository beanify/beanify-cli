const beanifyAjv = require('beanify-ajv')

module.exports = async function (beanify, opts) {
  beanify.register(beanifyAjv, {
    ajv: {
      useDefaults: true
    }
  })
}
