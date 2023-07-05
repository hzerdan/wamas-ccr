const {Router} = require('express')

const router = Router()

router.get('',(req,res)=>{
    res.send('<h1>API WAMAS PRUEBA</h1>')
})

module.exports = router