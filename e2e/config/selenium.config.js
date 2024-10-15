import {Builder} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import firefox from "selenium-webdriver/firefox.js";

export const buildDriver = async () => {
    const browser = process.env.BROWSER || "chrome"; // default to chrome
    let driver;
    switch (browser.toLowerCase()) {
        case 'chrome':
            const chromeOptions = new chrome.Options();
            chromeOptions.addArguments('--start-fullscreen');
            chromeOptions.addArguments('--force-device-scale-factor=1');

            driver = await new Builder()
                .forBrowser('chrome')
                .setChromeOptions(chromeOptions)
                .build();
            await driver.executeScript('document.body.style.zoom="100%"');
            break;

        case 'firefox':
            const firefoxOptions = new firefox.Options();
            firefoxOptions.addArguments('-kiosk'); // Launch Firefox in full-screen (kiosk) mode

            driver = await new Builder()
                .forBrowser('firefox')
                .setFirefoxOptions(firefoxOptions)
                .build();
            break;

        default:
            throw new Error('Unsupported browser! Use "chrome" or "firefox".');
    }
    await driver.manage().setTimeouts({ implicit: 5000 });
    return driver;
};
