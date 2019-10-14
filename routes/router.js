const router = require('express').Router();
const { catalog } =  require('../controllers/main')
router.get('/' , (req, res)=>{
    res.send({OK:"OK"}).json()
   
})

router.get('/catalog' , catalog)

module.exports = router;