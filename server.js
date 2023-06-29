import express from 'express' ;
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';
require("dotenv").config();
const app= express();
app.use(cors());
app.use('/' , router);
const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME ;
const PASSWORD = process.env.DB_PASSWORD ;

const URL= process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-h3ko7li-shard-00-00.zga05z5.mongodb.net:27017,ac-h3ko7li-shard-00-01.zga05z5.mongodb.net:27017,ac-h3ko7li-shard-00-02.zga05z5.mongodb.net:27017/?ssl=true&replicaSet=atlas-h4mve0-shard-0&authSource=admin&retryWrites=true&w=majority`


DBConnection(URL);
app.listen(PORT , () => console.log(`Server is running on Port ${PORT}`));