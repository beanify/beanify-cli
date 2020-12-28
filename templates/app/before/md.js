const md = require('beanify-markdown')

module.exports = async function (beanify, opts) {
  beanify.register(md, {
    // dir:'apis',
    // title:'API Docs'
  })
}
