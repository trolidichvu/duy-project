const express     = require('express');
const router      = express.Router();
let routerHandler = require("./routerHandler");


router.get('/health', routerHandler.health);

router.post('/add-host',routerHandler.addHost);
router.get('/get-hosts',routerHandler.getHosts);
router.post('/delete-host',routerHandler.deleteHost);


//get status a host
router.get('/get-host-status/:id',routerHandler.getHostStatus);
//get status all hosts
router.get('/get-hosts-status',routerHandler.getHostsStatus);

module.exports = router
