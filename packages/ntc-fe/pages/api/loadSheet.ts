import { GoogleSpreadsheet } from 'google-spreadsheet';

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
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  await sheet.loadCells('D1:D10');
  const totalCryptoWorth = sheet.getCellByA1('D2').value;
  const totalGoldWorth = sheet.getCellByA1('D7').value;

  const totalSavingAccount = sheet.getCellByA1('D10').value;
  res.json({
    sheetTitle: sheet.title,
    totalWorth: totalCryptoWorth + totalGoldWorth + totalSavingAccount,
  });
}
