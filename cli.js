#!/usr/bin/env node

const path = require('path')
const commist = require('commist')()
const help = require('help-me')({
  dir: path.join(path.dirname(require.main.filename), 'help')
})

const generate = require('./generate')
const generatePlugin = require('./generate-plugin')

commist.register('generate', generate)
commist.register('generate-plugin', generatePlugin)

commist.register('help', help.toStdout)
commist.register('version', () => {
  console.log('beanify-cli ' + require('./package.json').version)
})

const res = commist.parse(process.argv.splice(2))

if (res) {
  help.toStdout(res)
}
