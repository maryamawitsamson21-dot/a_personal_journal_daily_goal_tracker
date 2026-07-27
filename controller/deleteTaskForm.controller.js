const taskFormModel=require('../model/taskForm.model.js')
const deleteTask=async (req,res)=>{
    try{
 const checker =await taskFormModel.findOneAndDelete({
   title:req.body.title} )
    if(!checker){
       return res.status(404).send('there is not found in the database')
    }
   return res.render("delete.ejs")
    } catch(error){
        console.error('there are an error in deleting file from the database . this error is happened in controller.',error.message)
       return res.status(500).send('Internal server error.');
    }
   
}
module.exports=deleteTask