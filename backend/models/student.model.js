const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    fullname:{type:String, required:true},
    matno:{type:String, required:true, unique:true,  trim:true, minlength:3},
    phone:{type:String, required:true, unique:true,  trim:true, minlength:3},
    email:{type:String, required:true, unique:true,  trim:true, minlength:3},
    address:{type:String, required:true},
    supervisorID:{type:String},
    profilePicture:{type:String,trim:true},
    institution:{type:String, required:true},
    state: {type:String, reuired:true},
    password:{type:String, required:true},
  
},{
    timestamps:true,
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;