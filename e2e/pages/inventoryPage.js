import Page from './basePage.js';
import {By, until} from "selenium-webdriver";
import {waitForElementClickable, waitForElementVisible} from "../utils/waitUtils.js";

class InventoryPage extends Page {
    browser;
    constructor(driver) {
        super();
        this.browser = driver;
    }

    get cartButton() {
        return By.css('[data-test="shopping-cart-link"]')
    }

    open() {
        return super.open();
    }
}

export default InventoryPage;