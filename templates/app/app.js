const Beanify = require("beanify")
const beanifyAutoload = require("beanify-autoload")
const path = require("path")

const beanify = new Beanify({
    
})

beanify
    .register(beanifyAutoload, {
        dir: path.join(__dirname, "before")
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