const express = require('express');
const router = express.Router();
const userController = require('./user.controller')


router.get('/', userController.findUser);
router.post('/', userController.insertUser);

module.exports = router;