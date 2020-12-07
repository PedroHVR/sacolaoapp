const express = require('express');
const router = express.Router();

const orderController = require('../controllers/OrderC');

router.get('/', orderController.listProducts);
router.get('/:userId', orderController.listProducts);
router.post('/create', orderController.create)

module.exports = router;
