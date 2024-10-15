class Page {
    browser
    constructor(driver) {
        this.browser = driver
    }
    async open() {
        await this.browser.get("https://www.saucedemo.com/")
    }
}

export default Page