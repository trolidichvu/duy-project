let request=require("request");
let getResponseTimeServer=function (url) {
  let start = Date.now();
  return new Promise((resolve,reject)=>{
    try {
         request(url, function (error, httpResponse, body) {
           let end = Date.now();
           let duration = end-start;
           if(error){
             reject(error)
           }else{
             if(body=='ok'){
               resolve({
                 url:url.trim(),
                 start:start,
                 end:end,
                 duration:duration
               })
             }else{
               reject("server don't response ok");
             }
           }
         });
       } catch (e) {
         reject(e)
       }
  })
};

let healthModel=require("../model/health");

let getResponseTimeServers=async function (){
  setInterval(async()=>{
    let fs=require("fs");
    let hosts=fs.readFileSync("./files/hosts.txt","utf-8").trim().split('\n');
    for(let i=0;i<hosts.length;i++){
      let result=await getResponseTimeServer(hosts[i]);
      let newHealthMode = new healthModel({
        host:result.url,
        response_time_health:{
          start     : result.start,
          end       : result.end,
          duration  : result.duration
        }
      }).save();
    }
  },10000)
}

module.exports=getResponseTimeServers;
