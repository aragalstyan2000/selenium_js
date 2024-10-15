import {until} from 'selenium-webdriver'
import {findElement} from "./elemIterations.js";

export const waitForElementVisible = async (driver, locator, timeout = 10000) => {
    await driver.wait(until.elementLocated(locator), timeout);
    let elem = await findElement(driver, locator)
    await driver.wait(until.elementIsVisible(elem), timeout);
    return elem
};

export const waitForElementClickable = async (driver, locator, timeout = 10000) => {
    await driver.wait(until.elementLocated(locator), timeout);
    let elem = await findElement(driver, locator)
    await driver.wait(until.elementIsEnabled(elem), timeout);
    return elem
};
