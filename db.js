import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

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

export default sequelize;