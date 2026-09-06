const express = require('express');
const { createUser } = require('../Controller/UserController.js');
const router = express.Router();
router.post('/createUser', createUser);
module.exports = router;