const express = require('express');
const router = express.Router();
const userController = require('./user.controller')
const passport = require('passport');


router.post('/signup', userController.signup);
router.post('/login', passport.authenticate('local',{session: false}),userController.login);
router.get('/logout', passport.authenticate('jwt', { session: false }), userController.logout);


module.exports = router;