const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../../keys');
const router = express.Router();
const User = require('../../models/User');

router.post('/signup', async function (request, response, next) {
    const {user} = request.body;
    try {
        const necessaryUser = await User.findOne({
            raw: true,
            where: {
                name: user.username,
            },
            attributes: ['name', 'password']
        });
        if (necessaryUser.name && await bcrypt.compare(user.password, necessaryUser.password)) {
            const token = jwt.sign({
                login: user.username,
            }, keys.jwt, {expiresIn: 60 * 60});
            return response.json({
                token: token,
            });
        }
    } catch (e){
        response.send(e.statusCode);
    }
})

module.exports = router;

