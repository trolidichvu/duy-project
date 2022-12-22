let utils=require('../../../utils/index')
let getListMailBoxStealimage;
module.exports=function (mailserver,emailaddress) {
  return new Promise(async(resolve,reject)=>{
    try {
      if(mailserver=='stealimage.com'){
          let ids = await getListMailBoxStealimage(emailaddress);
          resolve(ids);
      }else reject('mailserver not found');
    } catch (e) {
      reject(e)
    }
  })
}

getListMailBoxStealimage = function(emailaddress) {
  return new Promise(async(resolve,reject)=>{
    try {
      let options={
        method:'get',
        uri: `https://mail.stealimage.com/home/user/inbox?fmt=json&query="to:${emailaddress}"`,
        auth: {
            user: process.env.MAIL_STEALIMAGE_USER,
            password: process.env.MAIL_STEALIMAGE_PASS
        }
      };
      let listMailRaw = await utils.makeRequest(options);
      let listMail=JSON.parse(listMailRaw).m;
      if(listMail){
        let ids=[];
        for (var i = 0; i < listMail.length; i++) {
          ids.push(listMail[i].id)
        }
        resolve(ids)
      }else{
        reject('not found')
      }


    } catch (e) {
      reject(e)
    }
  })

}
