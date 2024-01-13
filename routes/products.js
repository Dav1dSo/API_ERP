import express from 'express'
import { GetProducts, FindProduct, GetProductsByCategorie, CreateProduct, GetProductsByValue, UpdatedProduct } from '../controllers/products';

const route = express.Router();

route.get('/', GetProducts);
route.get('/getProduct', FindProduct);
route.get('/getProduct/filter_categorie/:category', GetProductsByCategorie);
route.post('/createProduct', CreateProduct);
route.get('/filterValue', GetProductsByValue);
route.post('/updatedProduct', UpdatedProduct);

export default route;  