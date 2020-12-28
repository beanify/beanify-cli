const Beanify = require('beanify')
const Plugin = require('./index')
const beanify = Beanify({})

beanify.register(Plugin, {}).ready(e => {
  e && beanify.$log.error(e.message)
  beanify.print()
})
