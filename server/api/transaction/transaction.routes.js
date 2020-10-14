const express = require('express');
const router = express.Router();
const transactionController = require('./transaction.controller');


router.get('/:currMonth', transactionController.findAccountBook);
router.post('/', transactionController.addTransaction);
router.put('/', transactionController.editTransaction);
router.delete('/:id', transactionController.removeTransaction);

module.exports = router;