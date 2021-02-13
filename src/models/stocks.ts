import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface stockAttributes {
  ticker: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface StockModel extends Model<stockAttributes>, stockAttributes {}
export class Stock extends Model<StockModel, stockAttributes> {}

export type StockStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): StockModel;
};

export function stocksFactory(sequelize: Sequelize): StockStatic {
  return <StockStatic>sequelize.define('stocks', {
    ticker: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
}
