const jwt=require('jsonwebtoken')
const {JWT_SECRET_KEY}=require('../env.js')

const authorization=async(req,res,next)=>{
    try{
       
       const authHeader= req.headers['authorization'];
   
if(!authHeader|| !authHeader.startsWith('Bearer')){
return res.status(403).json({
    success:'false',
    message:'you are not authorized.'

})
   }
   const token=authHeader.split(" ")[1]
   const ver=await jwt.verify(token,JWT_SECRET_KEY)
   req.user=ver;
   
 

   

next()
    }catch(error){
        return res.status(403).json({
    success:'false',
    message:'you are not authorized.'

})
        
    }
  
   
}
module.exports=authorization