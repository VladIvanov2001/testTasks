'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('info', {
      id: {
        type: Sequelize.INT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.String,
        allowNull: false
      },
      description: {
        type: Sequelize.INT,
        allowNull: false
      },
      image: {
        type: Sequelize.INT,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
