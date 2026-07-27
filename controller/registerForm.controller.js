const bcrypt=require('bcryptjs')
const user=require('../model/userForm.model.js');

const jwt=require('jsonwebtoken')
const { JWT_SECRET_KEY } = require('../env.js');

const authorization=async (req,res)=>{
    try{

    const {password,email,admin}=req.body;
    const emailChecker=await user.findOne({email:req.body.email})
   
    if(emailChecker){
        res.json({
            success:false,
            message:"there are already exist this user.try it again."
        })
        return 
    }
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    const doc= await user.create({
      
        email,
        password:hashedPassword,admin
    })
   const token=await jwt.sign({userId:doc._id,email,admin:doc.admin},JWT_SECRET_KEY,{expiresIn:"15d"})
    
    const ver=await jwt.verify(token,JWT_SECRET_KEY)
    //it will out like this
    // {
//   userId: '6a58e27f1975a609475b0f28',
//   username: 'mar4',
//   email: 'mar4@gmail.com',
//   iat: 1784210047,
//   exp: 1784210947
// }look at the sign 
  res.render("registoration.ejs")
    }catch(error){
        res.status(500).json({
        success:false,
        message:'there are error in registor controller.'+ error.message
       
    })
    }


}
module.exports=authorization