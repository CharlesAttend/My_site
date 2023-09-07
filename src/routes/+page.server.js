import puppeteer from "puppeteer";

const getStats = async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://www.strava.com/athletes/86960565");

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });
  // const searchResultSelector = ".MonthlyStats--currMonthStats--OiHnr .Stat--statValue--7eWuL";
  const searchResultSelector = `[class*="MonthlyStats--currMonthStats--"]`;
  const elements = await page.waitForSelector(searchResultSelector);
  const childrenText = await elements.$$eval(
    `[class*="Stat--statValue--"]`,
    (element) => {
      return element.map((li) => li.textContent.trim());
    },
  );
  console.log("Content inside <li> elements:", childrenText);
  await browser.close();
  return childrenText;
};

/** @type {import('./$types').PageLoad} */
export async function load() {
  const childrenText = await getStats();
  return { km: childrenText[0], time: childrenText[1] };
}
