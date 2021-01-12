const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('./keys');
const connection = require('./db');
const router = express.Router();

module.exports = function (){
    router.post('/signup', function (request, response, next) {
        const user = request.body;
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
        return router;
    })

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
        return router;
    })
}
