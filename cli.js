#!/usr/bin/env node

const path=require("path")
const commist = require('commist')()
const help = require('help-me')({
    dir: path.join(path.dirname(require.main.filename), 'help')
})

const generate = require('./generate')
const plugin=require("./plugin")


commist.register("generate",generate.cli)
commist.register("plugin",plugin.cli)

commist.register('help', help.toStdout)
commist.register("version", () => {
    console.log(require("./package.json").version)
})

const res = commist.parse(process.argv.splice(2))

if (res) {
    help.toStdout(res)
}