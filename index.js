const puppeteer = require("puppeteer");

const targetUrl = "https://tabbied.com/symmetry";

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  console.log("created a new page");
  console.log(`navigating to ${targetUrl} now`);
  await page.goto(targetUrl);
  console.log("waiting for navigation to finish");
  await page.waitForNavigation();
  console.log(`navigated to ${targetUrl}`);
  page.setViewport({ width: 1000, height: 600, deviceScaleFactor: 1 });
  console.log("Taking a screenshot");
  await page.screenshot({ path: "screenshots/symmetry.png" });

  await browser.close();
})();
