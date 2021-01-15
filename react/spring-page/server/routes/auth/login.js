const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../../keys');
const router = express.Router();
const User = require('../../models/User');

router.post('/signup', async function (request, response, next) {
    const {user} = request.body;
    try {
        const resultForDB = await User.findOne({
            raw: true,
            where: {
                name: user.username,
            },
            attributes: ['name', 'password']
        });
        if (resultForDB.name && await bcrypt.compare(user.password, resultForDB.password)) {
            const token = jwt.sign({
                login: user.username,
            }, keys.jwt, {expiresIn: 60 * 60});
            return response.json({
                token: token,
            });
        }
    } catch (e){
        next(e);
    }
})

module.exports = router;

