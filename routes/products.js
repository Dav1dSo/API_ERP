import express from 'express'
import { GetProducts, FindProduct } from '../controllers/products';

const route = express.Router();

route.get('/', GetProducts);
route.get('/getProduct', FindProduct);

export default route; 