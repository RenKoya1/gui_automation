import { config } from "dotenv";
import { Page } from "puppeteer";

config();
export async function xLogin(page: Page) {
  await page.waitForSelector('a[href="/login"]');
  await page.click('a[href="/login"]');

  await retryType(page, 'input[name="text"]', process.env.X_USERNAME as string);

  await page.keyboard.press("Enter");

  await page.waitForSelector('input[type="password"]', { visible: true });
  await page.type('input[type="password"]', process.env.X_PASSWORD as string, {
    delay: 100,
  });
  await page.keyboard.press("Enter");
}

async function retryType(
  page: Page,
  selector: string,
  text: string,
  retries = 3
) {
  console.log("リトライ開始");
  for (let i = 0; i < retries; i++) {
    console.log(`リトライ中... (${i + 1}/${retries})`);
    try {
      await page.waitForSelector(selector, { visible: true, timeout: 5000 });
      await page.type(selector, text, { delay: 100 });
      console.log("Username 入力成功");
      return;
    } catch (e) {
      console.log(`リトライ (${i + 1}/${retries})`);
    }
  }
  throw new Error("Username 入力失敗");
}
