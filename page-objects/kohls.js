const { By } = require("selenium-webdriver");

//const helpers = require("../runtime/helpers");
module.exports = {
    url: 'http://www.kohls.com/',
    elements: {
        shopbycategory: '//*[@id="top-nav-left"]/li/a/p/span',
        clearance: '//*[@id="navigation"]/li[1]/h2/a',
        clearancetxt: '//*[@id="vn-box"]/h3',
        searchbar: '//*[@id="search"]',
        search: by.name('search'),
        size: '//*[@id="panel46652526"]/a[5]',
        quantity: '//*[@id="panel46652528"]',
        addcart: '//*[@id="addtobagID"]',
        viewcart: '//*[@id="button-panel46652535"]',
        mycart: '//*[@id="header-shopping-cart"]/div',
        checout: '//*[@id="checkout-container"]/a[1]/div/svg',
        Signinpg: '//*[@id="signInForm"]/div/div[1]/div/div[1]/h3',
        account: '//*[@id="utility-nav"]/ul/div/a',
        signin: '//*[@id="pb_signin"]/div',
        loginEmail: by.name('loginEmail'),
        loginPassword: by.name('loginPassword'),
        signinbttn: '//*[@id="Profilelogin"]'

    },
    clickElement: async function (objectKey) {
        var selector = page.kohls.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: async function (objectKey) {
        var selector = page.kohls.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
    inputElemnt: async function(search,inp) {
        var selector = page.kohls.elements[search]; 
        await driver.sleep(4000);
        driver.findElement(By.xpath(selector)).click();
        return driver.findElement(By.xpath(selector)).sendKeys(inp);
     },
     searchPortal: async function (input) {
        await this.clickElement('search1');
        await this.inputElemnt(input);

       
        await this.inputUserName(user);
        await this.clickElement1('Continue');
        await this.inputPassword(pass);
        await this.clickElement1('Continue1');
        await driver.sleep(2000);
        return;
    },
};