const express = require('express');
const router = express.Router();
const productController = require('./product-controller');

router.get('/', productController.getAllProducts);


module.exports = router;
