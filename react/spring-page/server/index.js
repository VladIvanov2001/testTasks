const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require("mysql2");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");

const port = 8000;
const springInfo = require('./springInfo.json');
const keys = require('./keys');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "users",
    password: "12345"
});


app.get('/', (req, res) => {
    res.header("Content-Type", 'application/json');
    return res.send(JSON.stringify(springInfo));
})

app.post('/signup', function (request, response, next) {
    const user = request.body;
    connection.connect(function (err) {
        if (err) {
            return next(err);
        }
        console.log("Подключение к серверу MySQL успешно установлено");
        connection.query('SELECT username, password from users WHERE username = ?;',
            [user.username], function (err, result) {
            if (err) {
                return next(err);
            }
            if (bcrypt.compareSync(user.password, result[0].password)) {
                const token = jwt.sign({
                    login:user.username,
                }, keys.jwt, {expiresIn: 60 * 60});
                return response.status(200).json({
                    token:token,
                });
            }
        })

    });
})

app.post('/registration', function (request, response, next) {
    const user = request.body;
    connection.connect(function (err) {
        if (err) {
            return next(err);
        }
        console.log("Подключение к серверу MySQL успешно установлено");
        const salt = bcrypt.genSaltSync(10);
        const password = user.password;
        connection.query('INSERT INTO users (username, email, password, firstname, lastname, age) VALUES (?,?,?,?,?,?);',
            [user.username, user.email, bcrypt.hashSync(password, salt), user.firstName, user.lastName, user.age], function (err, result) {
            if (err) {
                return next(err);
            }
            return response.send(200);
        })

    });
})

app.listen(port, () => {
    console.log('We are live on ' + port);
});

