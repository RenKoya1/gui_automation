import { Page } from "puppeteer";

export async function goToFELO(page: Page) {
  await page.goto("https://felo.ai/ja/search");
}
