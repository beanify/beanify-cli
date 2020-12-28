const bp = require('beanify-plugin')

module.exports = bp(async function (beanify, opts) {
  beanify.route({
    url: 'add',
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
        }
      }
    },
    handler (req, rep) {
      const { body } = req
      rep.send(beanify.add(body.a, body.b))
    }
  })
})
