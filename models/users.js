// models/Product.js

import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    idUser: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'O email inserido não é válido.'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Users;
