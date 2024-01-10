'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      }, 
      idUser: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true, 
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }, 
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
