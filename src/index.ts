import puppeteer, { Page } from "puppeteer";
import { goToX } from "./x/goToX";
import { goToFELO } from "./felo/goToFelo";
import { inputFELO } from "./felo/inputFelo";
import { inputX } from "./x/inputX";
import { xLogin } from "./x/xLogin";

async function index() {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage();
  await goToFELO(page);
  const content = await inputFELO(page);
  console.log(content);

  await goToX(page);

  await xLogin(page);

  await inputX(page, content);

  //   setTimeout(async () => {
  //     await browser.close();
  //   }, 5000);
}

index();
