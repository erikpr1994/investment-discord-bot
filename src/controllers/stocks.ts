import fetch from 'node-fetch';
import { Op } from 'sequelize/types';

import { Stocks } from '../models/index';
import { StockModel } from '../models/stocks';

const registerCompany = async (ticker: string) => {
  try {
    const tickers = Stocks.findAll<StockModel>({
      where: {
        ticker: {
          [Op.like]: ticker,
        },
      },
    });

    if (tickers) {
      // TODO: Comprobar si alguno de los tickers coincide
      // TODO: Si coincide, mandar mensaje de que ya existe
      // TODO: Si no coincide, mandar mensaje con los posibles valores y preguntar si es alguno de esos
    }

    const tickerData = getTickerBasicData(ticker);
    // TODO: Save ticker data
  } catch (e) {
    console.log(e);
  }
};

const getTickerBasicData = async (ticker: string) => {
  try {
    const request = await fetch(
      `${process.env.baseURL}/stock/${ticker}/company?token=${process.env.iexcloudAPIKEY}`
    );

    const data = await request.json();

    // TODO: Return necessary data
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getNextDividendDate = async (ticker: string) => {
  try {
    // TODO: Check in DB if NextDividendDate is saved

    const request = await fetch(
      `${process.env.baseURL}/data-points/${ticker}?token=${process.env.iexcloudAPIKEY}`
    );

    const data = await request.json();

    console.log(data);

    const request2 = await fetch(
      `${process.env.baseURL}/data-points/${ticker}/NEXTDIVIDENDDATE?token=${process.env.iexcloudAPIKEY}`
    );

    const data2 = await request2.json();

    console.log(data2);
  } catch (error) {
    console.log(error);
  }
};

export default { registerCompany, getNextDividendDate };
