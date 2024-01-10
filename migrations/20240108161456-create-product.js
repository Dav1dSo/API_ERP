'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      cod: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      sold: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};