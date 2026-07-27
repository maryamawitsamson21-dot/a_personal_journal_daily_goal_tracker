const adminAuth=(req,res,next)=>{
    try{
        if(!(req.user.admin==="admin"||req.user.admin==="superAdmin")){
    return res.status(403).json({success:false,message:"you are not authorized!"})
    }
    next()
}
catch(error){
return res.status(500).json({
    success:'false',
    message:'sever error.you are not authorized for admin.'})
}
}
module.exports=adminAuth