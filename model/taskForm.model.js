

const mongoose=require('mongoose')

const taskFormSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true},
    list:[String],
    type:{
        type:String,
        enum:['sport','education','personal','work','entertainment']
    },
    dateToAccomplish:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})
const taskForm=mongoose.model('taskForm',taskFormSchema)

module.exports=taskForm