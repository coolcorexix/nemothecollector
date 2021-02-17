const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 320,
        height: 568,
        deviceScaleFactor: 1,
      });
    await page.goto('http://localhost:3000/');

    const elements = await page.$$('main');

    await elements[0].screenshot({ path: 'example-2-mobile.png' });
  
    await browser.close();
  })();