import {expect} from 'chai';
import {buildDriver} from '../config/selenium.config.js'
import LoginPage from '../pages/loginPage.js';
import InventoryPage from "../pages/inventoryPage.js";
import {findElement} from "../utils/elemIterations.js";
import {attachScreenshot} from "../utils/hooks.js";

describe('Inventory Suite', function () {
    let driver;
    let samplePage;
    let inventoryPage;

    beforeEach(async function () {
        driver = await buildDriver();
        samplePage = new LoginPage(driver);
        inventoryPage = new InventoryPage(driver);
        await samplePage.open();
        await samplePage.login("standard_user", "secret_sauce");
    });

    it('should add to cart successfully', async function () {
        await inventoryPage.addBackpackToCart();
        let cartBadge = await findElement(driver, inventoryPage.cartBadge);
        expect(await cartBadge.getText()).to.eq("1")
    });

    afterEach(async function () {
        await attachScreenshot.call(this, driver);
        await driver.close()
    });

    after(async function () {
        await driver.quit();
    });
});
