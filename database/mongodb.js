const {DB_URL}=require('../env.js')
const mongoose=require('mongoose')

if(!DB_URL){
   console.error('There is an error in database connection.')
   process.exit(1)
}

const DB_Connection = mongoose.connect(DB_URL)
   .then(() => {
       console.log('MongoDB is successfully connected! 🎉');
       return 'connected';
   })
   .catch((err) => {
       console.error('MongoDB connection error ❌:', err.message);
       throw err;
   });


module.exports=DB_Connection


