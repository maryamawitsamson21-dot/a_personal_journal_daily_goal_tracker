const createTask=require('../controller/taskForm.controller.js')
const {readForm,readSpecificTask}=require('../controller/readTaskForm.controller.js')
const toUpdateTask=require('../controller/updateTaskForm.controller.js')
const toDeleteTask=require('../controller/deleteTaskForm.controller.js')
const adminForm=require('../controller/adminTaskForm.controller.js')
const registerForm=require('../controller/registerForm.controller.js')
const authorization=require('../middlewares/authorization.js')
const loginForm=require('../controller/loginForm.controller.js')
const adminAuth=require('../middlewares/admin-auth.js')
const toUpload=require('../controller/toUploadImage.controller.js')
const multerToUpload=require("../middlewares/multer.js")
const multipleUpload=require('../controller/toUploadMultipleImage.controller.js')


  const express=require('express')
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('viewforall.ejs')
})
router.get('/homepage',readForm)
router.get('/get',readSpecificTask)
router.post('/create',createTask)
router.post('/toUpdate',toUpdateTask)
router.post('/toDelete',toDeleteTask)

router.get('/admin',authorization,adminAuth,adminForm)
router.post('/register',registerForm)
router.post('/login',loginForm)

router.post('/image/single',authorization,adminAuth,multerToUpload.single("img"),toUpload)
router.post('/image/many',authorization,adminAuth,multerToUpload.array("img",3),multipleUpload)
// router.post('/image/fromDifferent',authorization,adminAuth,multerToUpload.fields([{name:"img",maxCount:3},{name:"img2",maxCount:3}]),toUpload)
// router.post('/image/none',authorization,adminAuth,multerToUpload.none(),toUpload)

module.exports=router