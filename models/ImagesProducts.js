import { DataTypes } from "sequelize";
import sequelize from "../db";

const ImagesProducts = sequelize.define('ImagesProducts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      codProduct: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Products',  
          key: 'codProduct',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
});

export default ImagesProducts;  