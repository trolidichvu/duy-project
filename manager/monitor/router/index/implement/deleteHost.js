module.exports=function (req,res) {
  let fs=require("fs");
  let hosts=fs.readFileSync("./files/hosts.txt","utf-8").trim().split('\n');
  let host = req.body.host;
  let response=require('../../../response/index');

  if(!hosts.includes(host)){
    response.status=1;
    response.error="host not existed";
    response.data=`delete host ${host} fail`;
  }else{
    var index = hosts.indexOf(host);
    if (index !== -1) {
      array.splice(index, 1);
    }

    fs.writeFileSync("./files/hosts.txt",'');
    for(let i=0;i<hosts.length;i++){
      fs.appendFileSync("./files/hosts.txt",hosts[i].trim()+'\n');
    }
    response.data=`delete host ${host} successly`;
  }
  res.json(response);
}
