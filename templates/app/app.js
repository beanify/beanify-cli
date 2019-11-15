const Beanify = require("beanify")
const beanifyEnvOptions=require("beanify-env-options")
const beanifyAutoload = require("beanify-autoload")
const path = require("path")

const beanify = new Beanify(beanifyEnvOptions())

beanify
    .register(beanifyAutoload, {
        dir: path.join(__dirname, "previous")
    })
    .register(beanifyAutoload, {
        dir: path.join(__dirname, "plugins")
    })
    .register(beanifyAutoload, {
        dir: path.join(__dirname, "services")
    })
    .ready((err) => {
        beanify.$log.info("beanify ready.....", err)
    })

module.exports = beanify