import * as sequelize from 'sequelize';

import { stocksFactory } from './stocks';

import { config } from 'dotenv';
config();

const dbName: string = process.env.DB_NAME || '';
const dbUser: string = process.env.DB_USER || '';
const dbPassword: string = process.env.DB_PASSWORD || '';

export const dbConfig = new sequelize.Sequelize(dbName, dbUser, dbPassword, {
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  dialect: 'postgres',
  pool: {
    min: 0,
    max: 5,
    acquire: 30000000,
    idle: 10000000,
  },
  logging: false,
});

export const Stocks = stocksFactory(dbConfig);
