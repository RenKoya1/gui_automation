import { Page } from "puppeteer";

export async function inputGPT(page: Page) {
  await page.waitForSelector('div[contenteditable="true"]', { visible: true });
  const editorSelector = 'div[contenteditable="true"]';
  await page.focus(editorSelector);
  const message = "こんにちは、ChatGPT!";
  await page.keyboard.type(message, { delay: 100 });
  console.log("メッセージを入力しました！");
  // Enterキーで送信
  await page.keyboard.press("Enter");
  console.log("メッセージを送信しました！");
}
