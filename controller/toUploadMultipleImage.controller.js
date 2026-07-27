const mongoose=require("mongoose")
const fs=require("fs").promises
const cloudinaryHelper=require("../helper/cloudinary.helper.js")
const  cloudinary=require("../config/cloudinary.js")
const image=require("../model/image.model.js")

const toUploadMultipeImage=async(req,res)=>{
 try  { if(!req.files||req.files.length === 0){
         return res.status(400).json({message:"there is no file reach in the upload controller."})
    
    }
    for(let file of req.files){
        if(!file){
            return
        }
         const pa=file.path
    const dataInCloud=await cloudinaryHelper(pa)
     const toSaveInDataBase=await image.create({
     url:dataInCloud.url,
     publicId:dataInCloud.public_id,
     byWhom:req.user.userId
         })
         await fs.unlink(file.path)

    }
    return res.render("multipleimage.ejs")}
   catch(error){
         console.log(error)
         return res.status(500).json({message:"internal server error.",error1:error.message})
        
    }
  

}
module.exports=toUploadMultipeImage

