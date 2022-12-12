const express     = require('express');
const router      = express.Router();
let routerHandler = require("./routerHandler");


router.get('/health', routerHandler.health);

module.exports = router
