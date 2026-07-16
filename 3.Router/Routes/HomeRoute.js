const express=require('express');
const router=express.Router();
const { HomeResponse, InfoResponse } = require('../Controller/HomeController.js');

router.get('/',HomeResponse);
router.get('/home',HomeResponse);
router.get('/info',InfoResponse);

module.exports=router;