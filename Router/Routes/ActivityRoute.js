const express=require('express');
const router=express.Router();
const { GetAllUsers,GetUsersByGender, GetUserByFirstName } = require('../Controller/ActivityUserController.js');
router.get('/getAllUsers',GetAllUsers);

router.get('/getUsersByGender',GetUsersByGender);

router.get('/getUserByFirstName/:firstName',GetUserByFirstName);
module.exports=router;