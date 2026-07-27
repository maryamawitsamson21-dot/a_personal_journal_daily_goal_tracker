const bcrypt=require('bcryptjs')
const user = require("../model/userForm.model")

const login=async (req,res)=>{
    try{
 const {username,password}= req.body
   const emailChecker=await user.findOne({email:req.body.email})
   if(!emailChecker){
    return res.status(403).send('you are not credantial!')
   }
   const passwordChecker=await bcrypt.compare(password,emailChecker.password)
   if(!passwordChecker){
    return res.status(403).send('you are not credantial!')
   }
   return res.render("login.ejs")

    }catch(error){
        res.status(500).json({
        success:false,
        message:'there are error in login controller.'+ error.message
       
    })
    }
  

}
module.exports=login