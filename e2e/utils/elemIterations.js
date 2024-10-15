export const findElement = async (driver, locator) => {
    return await driver.findElement(locator)
};

export const click = async (elem) => {
    await elem.click();
};

export const type = async (elem, text) => {
    await elem.clear();
    await elem.sendKeys(text);
};
