const beanify=require("../../app")
const tap=require("tap")

tap.test("plugin-root.js test",(t)=>{

    t.plan(2)

    beanify.ready((err)=>{
        t.error(err)
        t.equal(beanify.root,"this is root string",'check beanify.root')
        beanify.close()
    })

})
