const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../../keys');

const router = express.Router();
const User = require('../../models/User');

router.post('/signup', async (request, response, next) => {
  const { username, password } = request.body;
  try {
    const necessaryUser = await User.findOne({
      raw: true,
      where: {
        name: username,
      },
      attributes: ['name', 'password', 'id'],
    });
    if (!necessaryUser) {
      new Error('There is no necessary user');
    }
    if (necessaryUser.name && await bcrypt.compare(password, necessaryUser.password)) {
      const token = jwt.sign({
        id: necessaryUser.id,
      }, keys.jwt, { expiresIn: 60 * 60 });
      return response.json({
        token,
      });
    }
  } catch (e) {
    response.status(404).json({
      message: e.message,
    });
  }
});

module.exports = router;
