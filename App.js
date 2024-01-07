import express from 'express';
import routesProducts from './src/routes/products';

const app = express();

app.use('/api/produtos', routesProducts);

app.listen(process.env.port || 3000, () => {
    console.log('Server running!');
});