const express = require('express');
const login = require('./login');
const registration = require('./registration');

const router = express.Router();

router.post('/signup', login);
router.post('/registration', registration);

module.exports = router;
