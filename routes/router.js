const router = require('express').Router();


router.get('/' , (req, res)=>{
    res.send({OK:"OK"}).json()
   
})

module.exports = router;