var express = require('express');
var router = express.Router();
const UserRepository = require('../repositories/users.repository');
/* GET home page. */
router.get('/', async (req, res, next) => {
    res.json(await UserRepository.selectAll())
});

module.exports = router;
