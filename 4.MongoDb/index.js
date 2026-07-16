
const express=require('express');
const mongoose=require('mongoose');
const server=express();
const port=8035;
const ActivityRouter=require('./Routes/ActivityRoute.js');

const HomeRouter=require('./Routes/HomeRoute.js');
const BlogsRouter=require('./Routes/BlogsRouter.js');
const uri="mongodb://localhost:27017/"
const database="crio-learn";

mongoose.connect(uri+database).then(()=>{
    console.log("MongoDb connected successfully");
}).catch((err)=>{
    console.log("MongoDb connection failed",err);
});
require('dotenv').config();
//only get method for home page
server.use(express.json());

server.use('/',HomeRouter);
server.use('/api/v1/users/',ActivityRouter);
server.use('/api/v1/blogs/',BlogsRouter);
server.listen(port,()=>{   
    console.log(`Server is running on port ${port}`);
});