const express=require('express');
const { default: userData } = require('./userData');
const server=express();
const PORT=8035;
server.get('/',(req,res)=>{
    res.send('This is Home Page');

});
server.get('/about',(req,res)=>{
    res.send('This is About Page');
});

server.get('/contact',(req,res)=>{
    res.send('This is Contact Page');
});
server.get("/fitness"   ,(req,res)=>{
    const reqType=req.baseUrl
    console.log(reqType);
    
    const metadata={
        version:"1.0.0",
        about:"This API provides information about fitness and its benefits.",
        data:userData,
        size:userData.length,
        'content-type':'application/json'
    }
    //res.send(JSON.stringify(metadata));
    res.json(metadata);
});
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});