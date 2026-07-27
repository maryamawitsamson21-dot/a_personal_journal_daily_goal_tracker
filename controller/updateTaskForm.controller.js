
const taskFormModel=require('../model/taskForm.model.js')
const updateTask=async (req,res)=>{
    try{

        const checker=await taskFormModel.findOneAndUpdate({
            title:req.body.targetTitle},
            { title:req.body.title,
                list:req.body.list,
                type:req.body.type,
                dateToAccomplish:req.body.dateToAccomplish},
          {returnDocument : 'after'})// { new: true } returns the updated document instead of the old one
        if(!checker){
            return res.status(404).send('there is not found this file in the database.')
        }
        return res.redirect("/notes/homepage")
            


    }catch(error){
        console.error('there are error in updating of the data that is found in controller.',error.message)
       return res.status(500).send('Internal server error.');
    }

}
module.exports=updateTask