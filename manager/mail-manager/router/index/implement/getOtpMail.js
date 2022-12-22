let getListMailBox = require("./getListMailBox");
let getMail        = require("./getMail");
let getOTP         = require("./getOTP");
module.exports=async function (req,res) {
  let response=require("../../../response/index");
  try{
    let mailserver=req.query.mailserver;
    let emailaddress=req.query.emailaddress;
    let service=req.query.service
    //
    let ids = await getListMailBox(mailserver,emailaddress);//expected array id, [ids]
    ids.sort();
    //Lấy phần tử có id cao nhất
    let id = ids[ids.length-1];
    let mail = await getMail(mailserver,id);
    let otp = await getOTP(service,mail)
    //
    response.data={
      otp
    }
    res.json(response)
  }catch(e){
    response.status=1;
    response.error=e.toString();
    res.json(response)
  }
}
