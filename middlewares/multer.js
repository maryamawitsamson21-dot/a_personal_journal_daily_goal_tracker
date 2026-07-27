const path=require("path")
const multer=require("multer")
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        try{
cb(null,'upload')
        }catch(error){
cb( new Error("there are error in the destination."))
        }
        
    },
    filename:function(req,file,cb){
        try{
            const goodNameForTheFile=file.fieldname+"_"+Date.now()+"_"+path.extname(file.originalname)
        cb(null,goodNameForTheFile)

        }catch(error)
        {
           return cb(new Error("there are error in the file naming."))
        }
        
    }
})
  
const fileFilter=(req,file,cb)=>{
    try{
       
 if(file && file.mimetype.startsWith("image/")){
          
          req.file=file
       cb(null,true)
       return req.file;
     
    }
    
return cb(new Error("File rejected: Only image files (JPEG, PNG, etc.) are allowed!"), false);
    }
    catch(error){
      cb( new Error("there are error in the file filtering method."))
    }
   
}

const upload=multer({
    storage,
    fileFilter,
    limits:{
        fileSize: 5*1024*1024
    }
})
module.exports=upload