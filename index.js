const puppeteer = require('puppeteer');
const fs = require('fs');

const targetUrl = 'YOUR_URL_HERE';

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(targetUrl);

  page.setViewport({
    width: 320,
    height: 480,
    deviceScaleFactor: 10,
  });

  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  await page.screenshot({
    path: 'screenshots/symmetry.png',
  });

  await browser.close();
})();
