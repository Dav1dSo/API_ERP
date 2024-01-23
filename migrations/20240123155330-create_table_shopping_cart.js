'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ShoppingCart', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      idUser: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Users',  
          key: 'idUser',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      codProduct: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Products',  
          key: 'codProduct',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quanty:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ShoppingCart');
  }
};
