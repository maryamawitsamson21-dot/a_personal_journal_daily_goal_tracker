const dns=require('dns/promises')
dns.setServers(['1.1.1.1', '8.8.8.8']);
const express=require('express')
const DB_Connection=require('./database/mongodb.js')



const app=express()
const { PORT }=require('./env.js')
const router=require('./route/route.js')

// This reads raw JSON (like from Postman)
app.use(express.json());

// 📌 THE FIX: This reads data sent from standard HTML <form> elements!
app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs")
app.set("views","view")

app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).json({ error: err.message });
});
app.use((err,req,res,next)=>{
if(err instanceof multer.MulterError ){
  if(err.code==="LIMIT_UNEXPECTED_FILE"||err.code === 'LIMIT_FILE_COUNT'){
    return res.status(400).json({ error: 'Forbidden: You can only upload one file at a time.' });
  }
} res.status(500).json({ error: err.message });
// if(req.files&&req.files.length>1){
//   return res.status(403).json({ error: 'Forbidden: Only single file uploads are allowed.' });
// }
// if(!req.files&&req.files.length===0){
//   return res.status(400).json({ error: 'No file provided.' });
// }
})
app.use('/notes',router)


app.listen(PORT,async()=>{
    await DB_Connection
    console.log( `server is listening on PORT ${PORT}\n${await DB_Connection} `)
        
        

    
})