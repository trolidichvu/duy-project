let healthModel=require("../../../model/health");
module.exports=function (req,res) {
  let fs=require("fs");
  healthModel.find({},(err,docs)=>{
    let response=require('../../../response/index');
    response.data=docs;
    res.json(response);
  });
}
