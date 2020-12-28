const Beanify = require('beanify')
const Autoload = require('beanify-autoload')

const path = require('path')

const beanify = Beanify({})

beanify
  .register(Autoload, {
    dir: path.join(__dirname, 'before'),
    dirAsScope: false
  })
  .register(Autoload, {
    dir: path.join(__dirname, 'plugins'),
    dirAsScope: false
  })
  .register(Autoload, {
    dir: path.join(__dirname, 'routes'),
    dirAsScope: true
  })
  .ready(e => {
    if (e) {
      beanify.$log.error(e.message)
    } else {
      beanify.$log.info('beanify ready...')
      //   beanify.print()
    }
  })

module.exports = beanify
