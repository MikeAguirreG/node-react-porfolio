const router = require('express').Router();
const { catalog, sendmail } =  require('../controllers/main')
router.get('/' , (req, res)=>{
    res.send({OK:"OK"}).json()
   
})

router.get('/catalog' , catalog)
router.post('/sendmail' , sendmail)

module.exports = router;