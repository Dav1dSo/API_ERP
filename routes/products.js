import express from 'express'
import GetProducts from '../controllers/products';

const route = express.Router();

route.get('/', GetProducts);

export default route; 