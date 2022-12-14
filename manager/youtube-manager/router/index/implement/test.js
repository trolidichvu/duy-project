let test_model=require("../../../model/test.js")
module.exports=function (req,res) {
  let newTest=new test_model({
    name:"abc"+Math.floor(Math.random()*1000)
  }).save(()=>{
    res.send("ok")
  });
}
