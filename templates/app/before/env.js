const beanifyEnv = require('beanify-env')

module.exports = async function (beanify, opts) {
  const envOptions = {
    dotenv: true,
    schema: {}
  }

  beanify.register(beanifyEnv, envOptions)
}
