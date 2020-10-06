const express = require('express');
const router = express.Router();
const user = require('./uesr/user.routes')
const passport = require('passport');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.use('/api/user', user);
router.use(passport.authenticate('auth', { session: false }));

module.exports = router;
