import Page from './basePage.js';
import {By} from "selenium-webdriver";
import {waitForElementClickable, waitForElementVisible} from "../utils/waitUtils.js";
import {click, type} from "../utils/elemIterations.js";

class LoginPage extends Page {
    browser;
    constructor(driver) {
        super();
        this.browser = driver;
    }

    get loginInput() {
        return By.css('[data-test="username"]')
    }

    get passwordInput() {
        return By.css('[data-test="password"')
    }

    get loginButton() {
        return By.css('[data-test="login-button"]')
    }

    async login(username, password) {
        let loginInput = await waitForElementVisible(this.browser, this.loginInput)
        await type(loginInput, username)
        let passwordInput = await waitForElementVisible(this.browser, this.passwordInput)
        await type(passwordInput, password)
        let loginButton = await waitForElementClickable(this.browser, this.loginButton)
        await click(loginButton)
    }

    open() {
        return super.open();
    }
}

export default LoginPage;