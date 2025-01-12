import { Page } from "puppeteer";

export async function createPdf(page: Page) {
  await page.pdf({ path: "hn.pdf", format: "a4" });
}
