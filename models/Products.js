import { DataTypes } from 'sequelize';
import sequelize from '../db';
import ImagesProducts from './ImagesProducts';

const Products= sequelize.define('Products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  codProduct: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sold: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}); 

Products.hasMany(ImagesProducts, { foreignKey: 'codProduct' });

export default Products;
