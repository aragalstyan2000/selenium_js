import Page from './basePage.js';
import {By} from "selenium-webdriver";
import {waitForElementClickable} from "../utils/waitUtils.js";
import {click} from "../utils/elemIterations.js";

class InventoryPage extends Page {
    browser;
    constructor(driver) {
        super();
        this.browser = driver;
    }

    get cartButton() {
        return By.css('[data-test="shopping-cart-link"]')
    }

    get cartBadge() {
        return By.css('[data-test="shopping-cart-badge"]')
    }

    get backPackAddButton() {
        return By.css('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    async addBackpackToCart() {
        let backPackAddButton = await waitForElementClickable(this.browser, this.backPackAddButton)
        await click(backPackAddButton)
    }

    open() {
        return super.open();
    }
}

export default InventoryPage;