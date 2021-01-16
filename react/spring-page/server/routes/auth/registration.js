const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../../models/User');

router.post('/registration', async function (request, response, next) {
    const {user} = request.body;
    const salt = await bcrypt.genSalt(10);
    const password = user.password;
    try {
        await User.create({
            name: user.username,
            email: user.email,
            password: await bcrypt.hash(password, salt),
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
        });
        return response.send(200);
    } catch (e) {
        response.send(e.statusCode);
    }
})
module.exports = router;
