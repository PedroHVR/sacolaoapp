const express = require('express');
const router = express.Router();

const orderController = require('../controllers/OrderC');

router.get('/u/', orderController.listProducts);
router.get('/u/:userId', orderController.listProducts);
router.get('/u/:orderId/:status/:helper', orderController.updateStatus);
router.get('/u/:orderId/:status', orderController.updateStatus);
router.get('/help/:userId', orderController.myHelpingOrders);
router.post('/create', orderController.create)

module.exports = router;
