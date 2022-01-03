const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supervisorSchema = new Schema({
    fullname:{type:String, required:true},
    employeeno:{type:String, required:true, unique:true,  trim:true, minlength:3},
    phone:{type:String, required:true},
    profilePicture:{type:String,trim:true},
    email:{type:String, required:true, unique:true,  trim:true, minlength:3},
    password:{type:String, required:true},
  
},{
    timestamps:true,
})

const Supervisor = mongoose.model('Supervisor', supervisorSchema);
module.exports = Supervisor;