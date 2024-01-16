import { DataTypes } from "sequelize";
import sequelize from "../db";

const ImagesProducs = sequelize.define('ImagesProducs', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    codProduct: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    path: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

export default ImagesProducs;  