const Sequelize = require("sequelize");

module.exports = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    dialect: "mysql",
    host: process.env.DB_HOST,
});
