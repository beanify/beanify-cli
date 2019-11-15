const beanify=require("../../app")
const tap=require("tap")

tap.test("service-example.js test",(t)=>{

    t.plan(3)

    beanify.ready((err)=>{
        t.error(err,'check ready.err')
        beanify.inject({
            url:'math.add',
            body:{
                a:1,
                b:2
            }
        },(err,res)=>{
            t.error(err,'check inject.err')
            t.equal(res,3,'check inject.res')
            beanify.close()
        })
    })
})
