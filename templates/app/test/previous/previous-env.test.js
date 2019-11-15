const beanify=require("../../app")
const tap=require("tap")

tap.test("previous-env.js test",(t)=>{

    t.plan(2)

    beanify.ready((err)=>{
        t.error(err)
        t.equal(beanify.config.TEST_ENV_KEY,"this is test env string",'check env.TEST_ENV_KEY')
        beanify.close()
    })

})
