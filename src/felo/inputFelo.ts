import { Page } from "puppeteer";

export async function inputFELO(page: Page) {
  await page.waitForSelector(
    'textarea[placeholder="何でも質問してください..."]',
    { visible: true }
  );

  const message =
    "最新のツイートを作成してください。出力はツイートのみにしてください";
  await page.type(
    'textarea[placeholder="何でも質問してください..."]',
    message,
    {
      delay: 100,
    }
  );

  console.log("テキストを入力しました！");

  // Enter キーで送信（必要なら）
  await page.keyboard.press("Enter");
  console.log("メッセージを送信しました！");
  await page.waitForSelector("div.markdown_markdown__wTkaE");

  // テキストを取得
  await page.waitForFunction(
    () => {
      const element = document.querySelector("div.text-theme-font-900");
      return element && (element as HTMLElement).innerText.includes("回答完了");
    },
    { timeout: 30000 }
  ); // 最大30秒待機

  const content = await page.evaluate(() => {
    const element = document.querySelector("div.markdown_markdown__wTkaE");
    if (element instanceof HTMLElement) {
      element.scrollTop = element.scrollHeight;
      return element.innerText;
    }
    return "";
  });

  return content;
}
