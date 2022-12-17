let health                       =    require("./implement/health.js");
let test                         =    require("./implement/test.js");
let routerHandler = {
  health,test
}

module.exports = routerHandler;
