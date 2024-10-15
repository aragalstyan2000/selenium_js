import {Builder} from 'selenium-webdriver'

export const buildDriver = async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    // Set implicit wait
    await driver.manage().setTimeouts({ implicit: 5000 });
    return driver;
};
