const puppeteer = require('puppeteer');
const fs = require('fs');

let targetUrl = 'YOUR_URL_HERE';
targetUrl =    'C:\\Users\\Park\\Downloads\\nodejs-projects\\tabbied-screenshot-generator\\free_sample_symmetry.html';

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
    path: 'screenshots/symmetry2.png',
  });

  await browser.close();
})();
