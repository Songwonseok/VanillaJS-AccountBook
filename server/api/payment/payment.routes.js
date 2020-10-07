const express = require('express');
const router = express.Router();
const PaymentController = require('./payment.controller');


router.get('/', PaymentController.findAllPayment);
router.post('/', PaymentController.addPayment);
router.delete('/:id', PaymentController.removePayment);

module.exports = router;