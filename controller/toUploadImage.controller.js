const mongoose=require("mongoose")
const fs=require("fs").promises
const cloudinaryHelper=require("../helper/cloudinary.helper.js")
const  cloudinary=require("../config/cloudinary.js")
const image=require("../model/image.model.js")


const toUploadImage=async (req,res)=>{
    try{
      
       

  if(!req.file){
       return res.status(400).json({message:"there is no file reach in the upload controller."+req.file})
    }
    const pa=req.file.path
     const dataInCloud=await cloudinaryHelper(pa)
      const toSaveInDataBase=await image.create({
url:dataInCloud.url,
publicId:dataInCloud.public_id,
byWhom:req.user.userId
    })
  await fs.unlink(req.file.path)
  
    return res.render("singleimage.ejs")

    }catch(error){
         console.log(error)
         return res.status(500).json({message:"internal server error.",error1:error.message})
        
    }
  

}
module.exports=toUploadImage