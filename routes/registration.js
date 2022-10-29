const express = require('express');
const router = express.Router();
const registerController = require('../controller/registration');

// const auth = require('../middleware/auth')

router.post('/', function (req, res) {
    registerController.registerUser(req,res)
});

module.exports = router;
