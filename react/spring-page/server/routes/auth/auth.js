const express = require('express');
const router = express.Router();
const login = require('./login');
const registration = require('./registration');

router.post('/signup', login)
router.post('/registration', registration)

module.exports = router;
