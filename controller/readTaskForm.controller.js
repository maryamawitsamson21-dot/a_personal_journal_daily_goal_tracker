const toReadFromModel=require('../model/taskForm.model.js')

const readForm=async (req,res)=>{
    try{
        
       
        let page=req.query.page*1 ||1;
         let limit=req.query.limit*1 || 2;
        let skip=(page-1)*limit;
        let sort=req.query.sortBy||"createdAt";
        let order=req.query.orderBy||-1;
          let obj={}
          obj[sort]=order
        if(req.query.sortBy&&req.query.orderBy){
obj={}
    sort= sort.split(",");
       order=order.split(",");
     

       sort.forEach((sort,index)=>{
       
obj[sort]= order[index]==='asc' ? 1:-1
       })
        }
   
         const data= await toReadFromModel.find().collation({ locale: 'en', strength: 2 }) .sort(obj).skip(skip).limit(limit)// (My Task1234) and your second item starts with a lowercase "i" (item1), MongoDB puts the uppercase "M" first—even though "i" comes before "M" in the normal alphabet.to prevent .collation({ locale: 'en', strength: 2 }) 
       if(data.length===0){
        return res.status(200).send('There is no task in this page.');
       }
       

return res.render('homepage.ejs',{data})


    }
    catch(error){
        
        return res.status(500).send('Internal server error.');
    }
    }
    const readSpecificTask=async(req,res)=>{
        try{
            const obj= await toReadFromModel.findOne({title:req.query.title})
            const data=[]
            if (obj !== null && obj !== undefined) {
            data.push(obj);
        }
           
        return res.render('getspecific.ejs',{data})


        }catch(error){
            console.error('there is found an error in finding specific user in the controller.')
            return res.status(500).send('Internal server error.');
        }
      
    }
   module.exports={readForm,readSpecificTask}
