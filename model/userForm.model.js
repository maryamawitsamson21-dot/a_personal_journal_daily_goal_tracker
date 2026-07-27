const { default: mongoose } = require("mongoose")

const userschema=new mongoose.Schema({
  
    email:{
        type:String,
         require:true,
        unique:true,
        trim:true,
                match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
         require:true,
    },
    admin:{
        type:String,
        enum:['user','admin','superAdmin'],
        default: 'user'
    }

})
const user=mongoose.model("user",userschema)
module.exports=user;