import { Page } from "puppeteer";

export async function goToX(page: Page) {
  await page.goto("https://x.com/");
}
