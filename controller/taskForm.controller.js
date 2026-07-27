

const taskFormModel=require('../model/taskForm.model.js')


const taskController= async (req,res)=>{
    try{
          const here=await taskFormModel.findOne({title:req.body.title})
    if(here){
       return res.send("already existed title.")
    }
   const taskFormController= await taskFormModel.create({
        title:req.body.title,
        list:req.body.list,
        type:req.body.type,
        dateToAccomplish:req.body.dateToAccomplish || Date.now()

    })
  

   return res.redirect('/notes/homepage')
}
   catch(error){
        console.error('there is an error in controller saving',error.message)
       return res.status(500).send('Internal server error.');
    }


}
module.exports=taskController