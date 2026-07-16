
const express=require('express');

const { HomeResponse,InfoResponse } = require('./Controllers/HomeResponse');
const server=express();
const port=8035;

//only get method for home page
server.get('/',HomeResponse);
server.get('/home',HomeResponse);
server.get('/info',InfoResponse);
server.get('/users',(req,res)=>{
    const data={
        name:"Shavali",
        age:22,
        gender:"Male"   
    }
    res.send(data);
})
server.listen(port,()=>{   
    console.log(`Server is running on port ${port}`);
});