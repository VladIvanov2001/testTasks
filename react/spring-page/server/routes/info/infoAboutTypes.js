require('dotenv').config();
const express = require('express');

const router = express.Router();
const InfoAboutSpring = require('../../models/InfoAboutSpring');

const jwtVerify = require('../../middleware/middleware');

router.get('/spring', jwtVerify, async (req, res) => {
  const nameForFilter = req.query.filter;
  try {
    const result = await InfoAboutSpring.findAll({ attributes: ['name', 'description', 'image'] });
    if (!result) {
      throw new Error('There is no necessary data');
    }
    const filteredArr = result.filter((elem) => elem.name.toLowerCase()
      .includes(nameForFilter.toLowerCase())
                || elem.description.toLowerCase()
                  .includes(nameForFilter.toLowerCase()));
    return res.json(filteredArr);
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});

module.exports = router;
