const express = require('express');
const router = express.Router();
const user = require('./uesr/user.routes')
const transaction = require('./transaction/transaction.routes')
const passport = require('passport');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.use('/api/user', user);
router.use(passport.authenticate('jwt', { session: false }));
router.use('/api/transaction', transaction);
module.exports = router;
