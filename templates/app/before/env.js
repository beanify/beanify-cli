const beanifyPlugin=require("beanify-plugin")

module.exports=beanifyPlugin((beanify,opts,done)=>{

    const envOptions={
        dotenv:true,
        schema:{
            type:'object',
            properties:{
                TEST_ENV_KEY:{
                    type:'string',
                    default:'this is test env string'
                }
            }
        }
    }

    beanify.register(require("beanify-env"),envOptions)

    done()
})