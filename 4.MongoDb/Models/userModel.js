const mongoose=require('mongoose');
const { data } = require('../userData');
const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique:true,validators:(data)=>{
        return validatorLib.isEmail(data);
    }},
    age:{type:Number,required:true},
    gender:{type:String,enum:['male','female','other'],required:true},
    // createdAt:{type:Date,default:Date.now},
    // updatedAt:{type:Date,default:Date.now},
    
},{
    timestamps:true
});
const User=mongoose.model('User',userSchema);
module.exports=User;
// this is user is user collection