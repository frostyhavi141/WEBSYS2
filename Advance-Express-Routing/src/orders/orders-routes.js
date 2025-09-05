const express = require('express');
const router = express.Router();
const orderController = require('./orders-controller');

router.get('/', orderController.getAllOrders);


module.exports = router;
