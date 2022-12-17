let healthModel=require("../../../model/health");
module.exports=function (req,res) {
  let fs=require("fs");
  let host=req.params.id;
  healthModel.find({host:host},
    null,
    { sort: { 'response_time_health.start': 'desc' },
    limit: 100 },
    (err,docs)=>{
      let response=require('../../../response/index');
      if(!err&&docs.length>0){
        let data={
          host:host,
          xAxis:[],
          yAxis:[]
        }
        let startTime=Date.parse(docs[docs.length-1].response_time_health.start)/1e4
        for (var i = 0; i < docs.length; i++) {
          data.xAxis.push(Math.round(Date.parse(docs[docs.length-i-1].response_time_health.start)/1e4-startTime));
          data.yAxis.push(docs[docs.length-i-1].response_time_health.duration);
        }
        response.data=data;
        res.json(response);
      }else{
        response.status=1;
        response.error="không tìm thấy host hoặc host chưa có dữ liệu"
        response.data=null;
        res.json(response);
      }
  });
}
