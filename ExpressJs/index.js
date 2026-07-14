
const express=require('express');

const { HomeResponse } = require('./Controllers/HomeResponse');
const { InfoResponse } = require('./Controllers/InfoResponse');
const server=express();
const port=8035;

//only get method for home page
server.get('/',HomeResponse);
server.get('/home',HomeResponse);
server.get('/info',InfoResponse);

server.listen(port,()=>{   
    console.log(`Server is running on port ${port}`);
});