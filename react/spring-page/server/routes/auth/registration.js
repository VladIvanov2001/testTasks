const express = require('express');
const bcrypt = require('bcryptjs');
const connection = require('../../db');
const router = express.Router();
const sequelize = require('../../sequelize');
const User = require('../../models/User');
const Sequelize = require("sequelize");

router.post('/registration', async function (request, response, next) {
    const user = request.body;
    const salt = await bcrypt.genSalt(10);
    const password = await user.password;

    await User.create({
        name: user.username,
        email: user.email,
        password: await bcrypt.hash(password, salt),
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
    });
    return response.send(200);

})
module.exports = router;
