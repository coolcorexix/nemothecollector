import { GoogleSpreadsheet } from 'google-spreadsheet';
import { CoinGeckoClient, SimplePriceResponse } from 'coingecko-api-v3';
import axios, { AxiosResponse } from 'axios';
import { coinGeckoReference } from 'src/coinGecko/coinGeckoReference';
import { getCoinReferenceByCoinId } from 'src/coinGecko/getCoinReferenceByCoinId';
import { TypeCoinCode } from 'src/coinGecko/TCoinCode.model';

const vndSymbol = 'vnd';

const sheetReference = {
  experimentalCoinsSheet: {
    dot: 'B2',
    cake: 'B3',
    bnb: 'B4',
    mana: 'B5',
  },
  bitcoinSheet: {
    total: 'B42',
  },
  ethereumSheet: {
    total: 'B24',
  },
};

async function getCoinGeckoVndPrice(): Promise<SimplePriceResponse> {
  const client = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
  });
  const coinPriceInVnd = await client.simplePrice({
    vs_currencies: vndSymbol,
    ids: coinGeckoReference.map((cR) => cR.coinId).join(','),
  });
  return coinPriceInVnd;
}

export default async function loadSheet(req, res) {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(
    '1wsvpQfANJ44Agz5Hx7s7dG88QKiGGziZA-maHUL4vQ0'
  );
  // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });
  await doc.loadInfo();
  const overviewSheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  await overviewSheet.loadCells('D1:D10');
  const totalCryptoWorth = overviewSheet.getCellByA1('D2').value;
  const totalGoldWorth = overviewSheet.getCellByA1('D7').value;
  const totalSavingAccount = overviewSheet.getCellByA1('D10').value;
  const experimentalCoinsSheet = doc.sheetsByIndex[1];
  await experimentalCoinsSheet.loadCells('B1:B7');
  const bitcoinsSheet = doc.sheetsByIndex[2];
  await bitcoinsSheet.loadCells('B49');
  const ethereumSheet = doc.sheetsByIndex[3];
  await ethereumSheet.loadCells('B24');

  const interestedCoinHave = {
    BTC: bitcoinsSheet.getCellByA1('B49').value,
    ETH: ethereumSheet.getCellByA1('B24').value,
    DOT: experimentalCoinsSheet.getCellByA1('B2').value,
    CAKE: experimentalCoinsSheet.getCellByA1('B3').value,
    BNB: experimentalCoinsSheet.getCellByA1('B4').value,
    MANA: experimentalCoinsSheet.getCellByA1('B5').value,
  };

  const coinGeckoReference = await getCoinGeckoVndPrice();
  let interestedCoinOverview = {};
  let coinGeckoCalculatedTotalCryptoWorth = 0;
  Object.keys(coinGeckoReference).map((thatCoinId) => {
    const thatCoinPrice = coinGeckoReference[thatCoinId]['vnd'];
    console.log(thatCoinId);
    const thatCoinCode = getCoinReferenceByCoinId(thatCoinId).code;
    interestedCoinOverview[getCoinReferenceByCoinId(thatCoinId).code] = {
      have: interestedCoinHave[thatCoinCode],
      worth: interestedCoinHave[thatCoinCode] * thatCoinPrice,
    };
    coinGeckoCalculatedTotalCryptoWorth +=
      interestedCoinHave[thatCoinCode] * thatCoinPrice;
  });

  res.json({
    totalWorth: totalCryptoWorth + totalGoldWorth + totalSavingAccount,
    coinGeckoCalculatedTotalCryptoWorth,
    interestedCoinOverview,
  });
}

export interface IResponseLoadSheet {
  totalWorth: number;
  interestedCoinOverview: {
    [key in TypeCoinCode]: {
      have: number;
      worth: number;
    };
  };
  coinGeckoCalculatedTotalCryptoWorth: number;
}
