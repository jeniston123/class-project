const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    activationCode:{
        type:String,
        required:true,
        default:null
    },
    isActivated:{
        type:Boolean,
        required:true,
        default:true
    }

})
const usermodel=mongoose.model('users',userschema)
module.exports=usermodel