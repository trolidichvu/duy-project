let request=require("request");
module.exports=function (url,params) {
  return new Promise((resolve,reject)=>{
    try {
         request.post({url:url, form:params}, function(err,httpResponse,body){
           if(err){
            reject(err)
          }else{
            resolve(body)
          }
         })
    } catch (e) {
       reject(e)
    }
  })
}
