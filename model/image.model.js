const mongoose=require("mongoose")

const imageSchema=new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    publicId:{
         type:String,
        required:true
    },
    byWhom:{
        type:mongoose.Schema.Types.ObjectId,

        ref:"user",
        required:true
    }
},{timestamps: true})
const image=mongoose.model("image",imageSchema)
module.exports=image