const adminForm=(req,res,next)=>{
    
        res.render("admin.ejs",{data:"you are admin. you have access to anything."})
}
module.exports=adminForm