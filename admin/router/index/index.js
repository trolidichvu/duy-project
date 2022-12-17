const express     = require('express');
const router      = express.Router();


router.get('/health',(req,res)=>{
  res.send('ok')
});
router.get('/',(req,res)=>{
  res.render('home')
});
router.get('/services',(req,res)=>{
  res.render('services');
})
module.exports = router
