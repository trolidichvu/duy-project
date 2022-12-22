const express     = require('express');
const router      = express.Router();
const utils       = require('../../../utils/index.js')

router.get('/',(req,res)=>{
  res.render('services/monitor/home')
});
router.get('/response-time/:id',async (req,res)=>{
  let response=await utils.makeGetRequest(`${process.env.MANAGER_MONITOR_HOST}/get-host-status/${encodeURIComponent(req.params.id)}`);
  res.render('services/monitor/response-time',{data:JSON.parse(response)});
});

module.exports = router
