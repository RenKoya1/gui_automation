import { Page } from "puppeteer";

export async function inputX(page: Page, text: string) {
  await page.waitForSelector('div[contenteditable="true"][role="textbox"]', {
    visible: true,
  });

  const textAreaSelector = 'div[contenteditable="true"][role="textbox"]';
  await page.focus(textAreaSelector);

  await page.keyboard.type(text, { delay: 100 });

  console.log("メッセージを入力しました！");
}
