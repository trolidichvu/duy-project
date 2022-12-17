const express     = require('express');
const router      = express.Router();
let routerHandler = require("./routerHandler");


router.get('/health', routerHandler.health);
router.get('/test', routerHandler.test);

module.exports = router
