const beanifyPlugin=require("beanify-plugin")

module.exports=beanifyPlugin((beanify,opts,done)=>{

    beanify.decorate("root",'this is root string')

    done()
})