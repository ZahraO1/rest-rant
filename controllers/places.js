const router = require('express').Router()

//displays the /places page
router.get('/',(req,res)=>{
    res.send('<h1>GET /places</h1>')
})

//exporting an express.Router()
module.exports=router