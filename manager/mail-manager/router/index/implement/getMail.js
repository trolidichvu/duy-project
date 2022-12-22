let utils=require('../../../utils/index');
let getMailBoxStealimage;
module.exports=function (mailserver,id) {
  return new Promise(async(resolve,reject)=>{
    try {
      if(mailserver=='stealimage.com'){
          let mail = await getMailBoxStealimage(id);
          resolve(mail);
      }else reject('mailserver not found');
    } catch (e) {
      reject(e)
    }
  })
}

getMailBoxStealimage = function (id) {
  return new Promise(async(resolve,reject)=>{
    try {
      let options={
        method:'get',
        uri: `https://mail.stealimage.com/home/user/?id=${id}`,
        auth: {
            user: process.env.MAIL_STEALIMAGE_USER,
            password: process.env.MAIL_STEALIMAGE_PASS
        }
      };
      let mailRaw = await utils.makeRequest(options);
      resolve(mailRaw)
    } catch (e) {
      reject(e)
    }
  })
}
