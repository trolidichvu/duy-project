let request=require("request");
module.exports=function (url) {
  return new Promise((resolve,reject)=>{
    try {
         request(url, function (error, httpResponse, body) {
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
