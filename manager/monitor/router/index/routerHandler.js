let health                       =    require("./implement/health.js");
let addHost                      =    require("./implement/addHost.js");
let getHosts                     =    require("./implement/getHosts.js");
let deleteHost                   =    require("./implement/deleteHost.js");
let getHostStatus                =    require("./implement/getHostStatus.js");
let getHostsStatus               =    require("./implement/getHostsStatus.js");

let routerHandler = {
  health,addHost,getHosts,deleteHost,getHostStatus,getHostsStatus
}

module.exports = routerHandler;
