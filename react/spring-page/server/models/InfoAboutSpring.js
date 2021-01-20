const sequelize = require('../sequelize');

module.exports = sequelize.define('infoSpring', {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  image: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'info',
});
