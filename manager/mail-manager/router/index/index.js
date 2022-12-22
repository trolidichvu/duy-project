const express     = require('express');
const router      = express.Router();
let routerHandler = require("./routerHandler");


router.get('/health', routerHandler.health);

router.get('/otp-mail',routerHandler.getOtpMail);//exaple query: mailserver=stealimage.com, emailaddress: chaonhe, service: browserless.io

module.exports = router
