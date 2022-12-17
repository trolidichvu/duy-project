let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const health = new Schema({
  host:{type:String, index: 'hashed'},
  response_time_health:{
    status:{type:Number, default:0}, //0 is success,1 is fail
    error:{type:String, default:''},
    start:Date,
    end:Date,
    duration:Number
  }
});


module.exports = mongoose.model("health", health)
