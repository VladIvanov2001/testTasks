const Sequelize = require("sequelize");
const sequelize = require('../sequelize');

module.exports = sequelize.define("infoSpring", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'info'
});
