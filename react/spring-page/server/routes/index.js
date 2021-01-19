const express = require('express');

const router = express.Router();
const auth = require('./auth/auth');
const infoAboutSpring = require('./info/infoAboutTypes');

router.use('/auth', auth);
router.use('/info', infoAboutSpring);

module.exports = router;
