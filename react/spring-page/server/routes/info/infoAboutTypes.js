require('dotenv').config();
const express = require('express');

const router = express.Router();
const InfoAboutSpring = require('../../models/InfoAboutSpring');

router.get('/spring', async (req, res) => {
  const nameForFilter = req.query.filter;
  try {
    const result = await InfoAboutSpring.findAll({ attributes: ['name', 'description', 'image'] });
    if (!result) {
      new Error('There is no necessary data');
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
