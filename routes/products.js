import express from 'express'
import { GetProducts, FindProduct, GetProductsByCategorie, CreateProduct, GetProductsByValue, UpdatedProduct, UpdatedImageProduct } from '../controllers/products';
import VerifyToken from '../middlewares/AuthenticationUser';
import { handleUpload } from '../middlewares/UploadImages';

const route = express.Router();

route.get('/', GetProducts);
route.get('/getProduct', VerifyToken, FindProduct);
route.get('/getProduct/filter_categorie/:category', VerifyToken, GetProductsByCategorie);
route.post('/createProduct', VerifyToken, handleUpload, CreateProduct);
route.get('/filterValue', VerifyToken, GetProductsByValue);
route.post('/updatedProduct', VerifyToken, handleUpload, UpdatedProduct);
route.post('/updatedImageProduct', VerifyToken, handleUpload, UpdatedImageProduct);

export default route;   