import { Page } from "puppeteer";

export async function screenshot(page: Page) {
  await page.screenshot({ path: "screenshot.png" });
}
