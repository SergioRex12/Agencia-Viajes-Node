import Sequelize from "sequelize";
import dotenv from 'dotenv/config';

const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_TYPE,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0, 
        acquire: 3000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;
