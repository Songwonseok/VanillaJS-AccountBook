const express = require('express');
const router = express.Router();
const passport = require('passport');
const user = require('./uesr/user.routes')
const transaction = require('./transaction/transaction.routes')
const payment = require('./payment/payment.routes')

router.get('/', function (req, res, next) {
    res.render('index');
});

router.use('/api/user', user);

router.use(passport.authenticate('jwt', { session: false }));
router.use('/api/transaction', transaction);
router.use('/api/payment', payment);

module.exports = router;
