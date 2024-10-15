import * as fs from "node:fs";
import * as path from "node:path";
import * as allure from "allure-js-commons";

export const attachScreenshot = async function (driver) {
    if (this.currentTest.state !== 'failed') return;
    const imageFileName = `${this.currentTest.title}.png`;
    const screenshotDir = './screenshots';
    fs.mkdirSync(screenshotDir, { recursive: true });
    const image = await driver.takeScreenshot();
    const screenshotPath = path.join(screenshotDir, imageFileName);
    fs.writeFileSync(screenshotPath, image, 'base64');
    const screenshotBuffer = fs.readFileSync(screenshotPath);
    await allure.attachment(imageFileName, screenshotBuffer, 'image/png');
};

export const quitBrowser = async (driver) => {
    const browser = process.env.BROWSER || "chrome";
    if (browser === "chrome") {
        await driver.quit();
    }
}