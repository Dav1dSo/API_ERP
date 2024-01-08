'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      cod: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      name: {
        type: Sequelize.TEXT,
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
        allowNull: false,
      },
      
      sold: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      categorie: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
