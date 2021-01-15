'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: Sequelize.INT,
            name: Sequelize.String,
            email: Sequelize.String,
            password: Sequelize.String,
            firstName: Sequelize.String,
            lastName: Sequelize.String,
            age: Sequelize.String,
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};
