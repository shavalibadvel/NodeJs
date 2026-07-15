
const express=require('express');
const { HomeResponse, InfoResponse } = require('./Controller/HomeController.js');
const server=express();
const port=8035;
const ActivityRouter=require('./Routes/ActivityRoute.js');const { GetAllUsers,GetUsersByGender, GetUserByFirstName } = require('./Controller/ActivityUserController.js');
const HomeRouter=require('./Routes/HomeRoute.js');
//only get method for home page
server.use('/',HomeRouter);
server.use('/api/v1/users/',ActivityRouter);

server.listen(port,()=>{   
    console.log(`Server is running on port ${port}`);
});