import Web3 from 'web3';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { SimplePriceResponse } from 'coingecko-api-v3';
import { getCoinReferenceByCoinId } from 'src/coinGecko/getCoinReferenceByCoinId';
import { TypeCoinCode } from 'src/coinGecko/TCoinCode.model';

const vndSymbol = 'vnd';
const mainnetProvider =
  'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';

async function getChainlinkVndPrice(): Promise<SimplePriceResponse> {
  const aggregatorV3InterfaceABI = require('./aggregatorV3InterfaceABI.json');
  const web3 = new Web3(mainnetProvider);
  const ethToUsdContractAddress = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';
  const busdToUsdContractAddress = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';
  const priceFeed = new web3.eth.Contract(
    aggregatorV3InterfaceABI,
    ethToUsdContractAddress
  );
  const roundData = await priceFeed.methods.latestRoundData().call();
  return {
    ethereum: {
      usd: roundData.answer,
    },
  };
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
  await experimentalCoinsSheet.loadCells('B1:B9');
  const bitcoinsSheet = doc.sheetsByIndex[2];
  await bitcoinsSheet.loadCells('B49');
  const ethereumSheet = doc.sheetsByIndex[3];
  await ethereumSheet.loadCells('B24');

  const interestedCoinHave = {
    ETH: ethereumSheet.getCellByA1('B24').value,
  };

  const coinGeckoReference = await getChainlinkVndPrice();
  let interestedCoinOverview = {};
  let coinGeckoCalculatedTotalCryptoWorth = 0;
  Object.keys(coinGeckoReference).map((thatCoinId) => {
    const thatCoinPrice = coinGeckoReference[thatCoinId]['usd'];
    console.log(thatCoinId);
    const thatCoinCode = getCoinReferenceByCoinId(thatCoinId).code;
    console.log(
      '🚀 ~ file: loadSheetAndChainlink.ts ~ line 62 ~ Object.keys ~ thatCoinCode',
      thatCoinCode
    );
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
