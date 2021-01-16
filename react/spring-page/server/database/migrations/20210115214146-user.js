'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type:Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING,
            age: Sequelize.STRING,
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};
