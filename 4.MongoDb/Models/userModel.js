const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique:true,match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/},
    age:{type:Number,required:true},
    gender:{type:String,enum:['male','female','other'],required:true},
    // createdAt:{type:Date,default:Date.now},
    // updatedAt:{type:Date,default:Date.now},
    timeStamp:{type:Date,default:Date.now}
});
module.exports=mongoose.model('User',userSchema);
// this is user is user collection