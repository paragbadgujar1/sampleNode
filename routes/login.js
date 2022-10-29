const express = require('express');
const router = express.Router();
const loginController = require('../controller/login');

// const auth = require('../middleware/auth')

router.get('/', function (req, res) {
    loginController.loginUser(req,res)
});

module.exports = router;
