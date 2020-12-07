const express = require('express');
const router = express.Router();

const userController = require('../controllers/userC');

router.post('/create-user', userController.createUser);

router.post('/login', userController.login);

module.exports = router;
