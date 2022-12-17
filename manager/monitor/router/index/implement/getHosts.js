module.exports=function (req,res) {
  let fs=require("fs");
  let hosts=fs.readFileSync("./files/hosts.txt","utf-8").trim().split('\n');
  let response=require('../../../response/index');
  response.data=hosts;
  res.json(response);
}
