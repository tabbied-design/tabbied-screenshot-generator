const fs = require('fs');
const puppeteer = require('puppeteer');

async function generateScreenshot(
  url,
  filename,
  pageWidth,
  pageHeight,
  scaleFactor,
) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(url);

  page.setViewport({
    width: pageWidth,
    height: pageHeight,
    deviceScaleFactor: scaleFactor,
  });

  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  await page.screenshot({
    path: `screenshots/${filename}.png`,
  });

  await browser.close();
}

module.exports = { generateScreenshot };
