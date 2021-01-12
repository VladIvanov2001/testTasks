const mysql = require('mysql2');
require('dotenv').config();
module.exports = function () {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DATABASE,
        password: process.env.DB_PASS
    });
}
