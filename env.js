const dotenv = require('dotenv');
dotenv.config({ path: './env.development.local' });

const {DB_URL,PORT,JWT_SECRET_KEY,CLOUD_NAME,CLOUD_API_KEY,CLOUD_SECRET} = process.env
module.exports={DB_URL,PORT,JWT_SECRET_KEY,CLOUD_NAME,CLOUD_API_KEY,CLOUD_SECRET}