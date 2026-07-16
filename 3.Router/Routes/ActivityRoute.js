const express=require('express');
const router=express.Router();
const { GetAllUsers,GetUsersByGender, GetUserByFirstName } = require('../Controller/ActivityUserController.js');
const { passwordAuthMiddleware } = require('../Middleware/passwordAuthMiddleware.js');
//router.get('/getAllUsers',passwordAuthMiddleware,GetAllUsers);
router.get('/getAllUsers', passwordAuthMiddleware,GetAllUsers);
router.get('/getUsersByGender',passwordAuthMiddleware,GetUsersByGender);

router.get('/getUserByFirstName/:firstName',passwordAuthMiddleware,GetUserByFirstName);

module.exports=router;