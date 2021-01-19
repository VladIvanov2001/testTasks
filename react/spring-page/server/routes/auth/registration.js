const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../../keys');

const router = express.Router();
const User = require('../../models/User');

router.post('/registration', async (request, response) => {
  const {
    username, email, password, firstName, lastName, age,
  } = request.body;
  const salt = await bcrypt.genSalt(10);
  try {
    await User.create({
      name: username,
      email,
      password: await bcrypt.hash(password, salt),
      firstName,
      lastName,
      age,
    });
    const token = jwt.sign({
      id: username,
    }, keys.jwt, { expiresIn: 60 * 60 });
    return response.json({
      token,
    });
  } catch (e) {
    response.status(400).json({
      message: 'There is no all data',
    });
  }
});
module.exports = router;
