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
  .ready(async e => {
    if (e) {
      beanify.$log.error(e.message)
    } else {
      beanify.$log.info('beanify ready...')
      beanify.print()
      const sum = await beanify.inject({
        url: 'math.add',
        body: {
          a: 10,
          b: 20
        }
      })
      const diff = await beanify.inject({
        url: 'math.sub',
        body: {
          a: 15,
          b: 10
        }
      })
      const shape = await beanify.inject({
        url: 'shape.test'
      })
      console.log({
        sum,
        diff,
        shape
      })
    }
  })
