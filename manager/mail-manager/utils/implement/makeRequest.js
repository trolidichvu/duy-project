let request=require("request");
module.exports=function (options) {
  return new Promise((resolve,reject)=>{
    try {
         request(options, function (error, httpResponse, body) {
           if(error){
             reject(error)
           }else{
             resolve(body)
           }
         });
       } catch (e) {
         reject(e)
       }
  })
}
