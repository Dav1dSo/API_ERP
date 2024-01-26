import express from 'express'
import { GetProducts, FindProduct, GetProductsByCategorie, CreateProduct, FilterProductsByValue, UpdatedProduct,
UpdatedImageProduct, CreateGategory, CreateShoppingCart, GetShoppingCartByUser } from '../controllers/products';
import VerifyToken from '../middlewares/AuthenticationUser';
import { handleUpload } from '../middlewares/UploadImages';

const route = express.Router();

route.get('/', GetProducts);
route.get('/getProduct', VerifyToken, FindProduct);
route.get('/getProduct/filter_categorie/:category', VerifyToken, GetProductsByCategorie);
route.post('/createProduct', VerifyToken, handleUpload, CreateProduct);
route.get('/filterValue', VerifyToken, FilterProductsByValue);
route.post('/updatedProduct', VerifyToken, handleUpload, UpdatedProduct);
route.post('/updatedImageProduct', VerifyToken, handleUpload, UpdatedImageProduct);
route.post('/createdCategoryProduct', VerifyToken, CreateGategory);
route.post('/createShoppingCart', VerifyToken, CreateShoppingCart);
route.post('/GetShoppingCartByUser', VerifyToken, GetShoppingCartByUser);

export default route;       