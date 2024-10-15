import {expect} from 'chai';
import {buildDriver} from '../config/selenium.config.js'
import LoginPage from '../pages/loginPage.js';
import InventoryPage from "../pages/inventoryPage.js";
import {findElement} from "../utils/elemIterations.js";
import {attachScreenshot, quitBrowser} from "../utils/hooksHelpers.js";

describe('Login Suite', function () {
    let driver;
    let samplePage;
    let inventoryPage;

    beforeEach(async function () {
        driver = await buildDriver();
        samplePage = new LoginPage(driver);
        inventoryPage = new InventoryPage(driver);
        await samplePage.open();
    });

    it('should login successfully', async function () {
        await samplePage.login("standard_user", "secret_sauce");
        expect(await driver.getCurrentUrl()).to.contain('inventory');
        let cartVisibility = await findElement(driver, inventoryPage.cartButton);
        expect(await cartVisibility.isDisplayed()).to.be.true;
    });

    it('should login successfully(fail)', async function () {
        await samplePage.login("standard_user", "secret_saucee");
        expect(await driver.getCurrentUrl()).to.contain('inventory');
    });

    afterEach(async function () {
        await attachScreenshot.call(this, driver);
        await driver.close();
    });

    after(async function () {
        await quitBrowser();
    });
});
