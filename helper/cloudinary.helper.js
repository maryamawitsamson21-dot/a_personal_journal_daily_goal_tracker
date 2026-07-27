const cloudinary=require("cloudinary")
const authorization=require("../middlewares/authorization.js")
const  cloudinaryHelper=async(filepath)=>{
const uploadResult=await cloudinary.uploader.upload(filepath)
return {
   url: uploadResult.url,
   public_id:uploadResult.public_id,
   
}}
module.exports=cloudinaryHelper