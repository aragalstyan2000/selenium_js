import * as fs from "node:fs";
import * as path from "node:path";
import addContext from "mochawesome/addContext.js";

export const attachScreenshot = async function (driver) {
    if (this.currentTest.state === 'failed') {
        const imageFileName = `${this.currentTest.title}.jpeg`;
        const screenshotDir = path.join('./screenshots');
        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir, { recursive: true });
        }
        const image = await driver.takeScreenshot();
        const screenshotPath = path.join(screenshotDir, imageFileName);
        fs.writeFileSync(screenshotPath, image, 'base64');
        addContext(this, 'Following comes the failed test image');
        addContext(this, `../screenshots/${imageFileName}`);
    }
};
