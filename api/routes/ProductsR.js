const express = require('express');
const router = express.Router();

const productController = require('../controllers/CategoryProductC');

router.get('/', productController.listProducts);
router.post('/create-product', productController.createProduct)
router.post('/create-category', productController.createCategory)

module.exports = router;
