let express=require("express");
let app= new express();
require('dotenv').config();


//mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)

//router
let indexRouter=require("./router/index/index.js");
let bodyParser=require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/',indexRouter);

let PORT = parseInt(process.env.PORT);

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});
