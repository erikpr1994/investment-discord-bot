import * as sequelize from 'sequelize';

import { stocksFactory } from './stocks';

import { config } from 'dotenv';
config();

const dbName: string = process.env.POSTGRES_DB || '';
const dbUser: string = process.env.POSTGRES_USER || '';
const dbPassword: string = process.env.POSTGRES_PASSWORD || '';

export const dbConfig = new sequelize.Sequelize(dbName, dbUser, dbPassword, {
  port: Number(process.env.POSTGRES_PORT),
  host: process.env.POSTGRES_HOST,
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
