let getOTPStealimage;
module.exports=function (service,mail) {
  return new Promise(async(resolve,reject)=>{
    try {
      if(service=='browserless.io'){
          let otp = await getOTPStealimage(mail);
          resolve(otp);
      }else reject('service not found');

      resolve(otp);
    } catch (e) {
      reject(e)
    }
  })
}

getOTPStealimage = function (mail) {
  return new Promise((resolve,reject)=>{
    try {
      let mail2=mail.replace(/( |\r\n|\n|\r)/gm, "");
      let otp=mail2.split('left;color:#333333;">')[3].split('</div>=20</td>')[0];
      resolve(otp);
    } catch (e) {
      reject(e)
    }
  })

}
