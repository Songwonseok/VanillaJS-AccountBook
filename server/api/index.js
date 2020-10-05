const express = require('express');
const router = express.Router();
const user = require('./uesr/user.routes')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.use('/api/user', user);

module.exports = router;
