const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../../keys');
const connection = require('../../db');
const router = express.Router();

router.post('/signup', function (request, response, next) {
    const user = request.body;
    console.log(request.body);
    connection.connect(function (err) {
        if (err) {
            return next(err);
        }
        console.log('MySQL connection was successfully installed');
        connection.query('SELECT username, password from users WHERE username = ?;',
            [user.username], function (err, result) {
                if (err) {
                    return next(err);
                }
                if (bcrypt.compare(user.password, result[0].password)) {
                    const token = jwt.sign({
                        login: user.username,
                    }, keys.jwt, {expiresIn: 60 * 60});
                    return response.json({
                        token: token,
                    });
                }
            })

    });
})

module.exports = router;

