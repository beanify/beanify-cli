const { route } = require('beanify-autoload')

module.exports = route({
  schema: {
    body: {
      type: 'object',
      properties: {
        a: {
          type: 'number'
        },
        b: {
          type: 'number'
        }
      },
      required: ['a', 'b']
    }
  },
  handler (req, rep) {
    const { a, b } = req.body
    rep.send(a - b)
  }
})
