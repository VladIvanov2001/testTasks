const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../../keys');
const connection = require('../../db');
const router = express.Router();
const sequelize = require('../../sequelize');
const User = require('../../models/User');


router.post('/signup', async function (request, response, next) {
    const user = request.body;
    const resultForDB = await User.findOne({
        where: {
            name: user.username,
        },
        attributes: ['name', 'password']
    }, {
        raw: true,
    });
    if (resultForDB.dataValues.name && bcrypt.compare(user.password, resultForDB.dataValues.password)) {
        const token = jwt.sign({
            login: user.username,
        }, keys.jwt, {expiresIn: 60 * 60});
        return response.json({
            token: token,
        });
    }
})

module.exports = router;

