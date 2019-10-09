const puppeteer = require('puppeteer');

const targetUrl = 'symmetry_copy.html';

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(targetUrl);

  page.setViewport({
    width: 320,
    height: 480,
    deviceScaleFactor: 10,
  });

  await page.screenshot({
    path: 'screenshots/symmetry.png',
  });

  await browser.close();
})();
