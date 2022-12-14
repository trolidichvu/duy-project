let express=require("express");
let app=new express();
require('dotenv').config();

let indexRouter=require("./router/index/index.js");
let serviceMonitorRouter=require("./router/manager/monitor/index.js");

let bodyParser=require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

app.use('/',indexRouter);
app.use('/service/monitor',serviceMonitorRouter);


let PORT = parseInt(process.env.PORT);

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});
