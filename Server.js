import express from 'express';
import routesProducts from './routes/products';
import routesUsers from './routes/users'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/produtos', routesProducts);
app.use('/api/users', routesUsers);

app.listen(process.env.PORT_SERVE || 3000, () => {
    console.log(`Server running in port ${process.env.PORT_SERVE} !`);
});
