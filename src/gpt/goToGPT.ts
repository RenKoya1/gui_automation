import { Page } from "puppeteer";

export async function goToGPT(page: Page) {
  await page.goto("https://chatgpt.com/");
}
