const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../../keys');
const router = express.Router();
const User = require('../../models/User');

router.post('/signup', async function (request, response, next) {
    const {user} = request.body;
    console.log(user);
    try {
        const necessaryUser = await User.findOne({
            raw: true,
            where: {
                name: user.username,
            },
            attributes: ['name', 'password', 'id']
        });
        console.log(necessaryUser);
        if (!necessaryUser) {
            new Error("There is no necessary user");
        }
        if (necessaryUser.name && await bcrypt.compare(user.password, necessaryUser.password)) {
            const token = jwt.sign({
                id: necessaryUser.id
            }, keys.jwt, {expiresIn: 60 * 60});
            return response.json({
                token: token,
            });
        }
    } catch (e) {
        response.status(404).json({
            message: e.message,
        })
    }
})

module.exports = router;

