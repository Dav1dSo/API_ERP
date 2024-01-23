import { DataTypes } from "sequelize";
import sequelize from "../db";

const ModelShoppingCart = sequelize.define('ShoppingCart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    idUser: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'codProduct',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    quanty: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
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

export default ModelShoppingCart;  