module.exports = async function (beanify, opts) {
  beanify.route({
    url: ':base',
    handler (req, rep) {
      rep.send(req.params)
    }
  })
}
