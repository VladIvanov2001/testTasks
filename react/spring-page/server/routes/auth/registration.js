const express = require('express');
const bcrypt = require('bcryptjs');
const connection = require('../../db');
const router = express.Router();

router.post('/registration', function (request, response, next) {
    const user = request.body;
    connection.connect(function (err) {
        if (err) {
            return next(err);
        }
        console.log('MySQL connection was successfully installed');
        const salt = bcrypt.getSalt(10);
        const password = user.password;
        connection.query('INSERT INTO users (username, email, password, firstname, lastname, age) VALUES (?,?,?,?,?,?);',
            [user.username, user.email, bcrypt.hash(password, salt), user.firstName, user.lastName, user.age], function (err, result) {
                if (err) {
                    return next(err);
                }
                return response.send(200);
            })

    });
})
module.exports = router;
