import express from 'express'
import { GetProducts, FindProduct, GetProductsByCategorie } from '../controllers/products';

const route = express.Router();

route.get('/', GetProducts);
route.get('/getProduct', FindProduct);
route.get('/getProduct/filter_categorie/:category', GetProductsByCategorie);

export default route; 