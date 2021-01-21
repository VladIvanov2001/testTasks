require('dotenv').config();
const express = require('express');
const { Op } = require('sequelize');
const InfoAboutSpring = require('../../models/InfoAboutSpring');
const jwtVerify = require('../../middleware/middleware');

const router = express.Router();

router.get('/spring', jwtVerify, async (req, res) => {
  const nameForFilter = req.query.filter;
  try {
    const result = await InfoAboutSpring.findAll({ attributes: ['name', 'description', 'image'] });
    if (!result) {
      throw new Error('There is no necessary data');
    }
    const filtredArr = await InfoAboutSpring.findAll({
      attributes: ['name', 'description', 'image'],
      where: {
        [Op.or]: {
          name: {
            [Op.like]: `%${nameForFilter}%`,
          },
          description: {
            [Op.like]: `%${nameForFilter}%`,
          },
        },
      },
    });
    return res.json(filtredArr);
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});

module.exports = router;
