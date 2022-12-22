let health                       =    require("./implement/health.js");
let getOtpMail                   =    require("./implement/getOtpMail.js");

let routerHandler = {
  health, getOtpMail
}

module.exports = routerHandler;
