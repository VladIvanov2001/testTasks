const express = require('express');
const router = express.Router();
const springInfo = require('./springInfo.json');
router.get('/', (req, res) => {
    return res.send(JSON.stringify(springInfo));
})

module.exports = router;

