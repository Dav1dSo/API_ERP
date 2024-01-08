import express from 'express';
import routesProducts from './src/routes/products';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use('/api/produtos', routesProducts);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados PostgreSQL estabelecida!');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

app.listen(process.env.PORT_SERVE || 3000, () => {
    console.log(`Server running in port ${process.env.PORT_SERVE} !`);
});

export default sequelize;