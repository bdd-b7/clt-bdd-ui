const helpers = require("../runtime/helpers")
const { assert } = require("chai");
const { selectDropdownValueByVisibleText } = require("../runtime/helpers");
module.exports = {
    urls: 'https://www.amazon.com/',
    
    element: {
        signin: '//*[@id="nav-link-accountList-nav-line-1"]',
        signinheader: '//*[@id="authportal-main-section"]/div[2]/div/div[1]/form/div/div/div/h1',
        Continue: '//*[@id="continue"]',
        Continue1: '//*[@id="signInSubmit"]',
        customerName: by.name('customerName'),
        email: by.name('email'),
        password: by.name('password'),
        passwordCheck: by.name('passwordCheck'),
        Createnewaccount: '//*[@id="createAccountSubmit"]',
        ErrorMessage: '//*[@id="authportal-main-section"]/div[2]/div/div[1]/div/div/h4',
        verifyemail: '//*[@id="continue"]',
        HomePage: '//*[@id="nav-logo-sprites"]',
       iphoneproducts: '//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[2]/div/span/div/div/span',
        fieldkeywords: by.name('fieldkeywords'),
       searchicon: '//*[@id="nav-search-submit-button"]',
        searchbar: '//*[@id="twotabsearchtextbox"]',
       all: '//*[@id="nav-hamburger-menu"]',
       signout:'//*[@id="hmenu-content"]/ul[1]/li[35]/a'

    },
    clickElement1: async function (objectKey) {
        var selector = page.amazon.element[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists1: async function (objectKey) {
        var selector = page.amazon.element[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
  
    inputUserName: async function(val) {
        var selector = page.amazon.element['email']; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputPassword: async function(val) {
        var selector = page.amazon.element['password']; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);
    },
    inputElement: async function(name,val) {
        var selector = page.amazon.element[name]; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputElement1: async function(fieldkeywords,input) {
        var selector = page.amazon.element[fieldkeywords]; 
        await driver.sleep(4000);
        driver.findElement(By.xpath(selector)).click();
        return driver.findElement(By.xpath(selector)).sendKeys(input);
     },

    loginPortal: async function (user,pass) {
        await helpers.loadPage(page.amazon.urls);
        await this.clickElement1('signin');
        await this.inputUserName(user);
        await this.clickElement1('Continue');
        await this.inputPassword(pass);
        await this.clickElement1('Continue1');
        await driver.sleep(2000);
        return;
    },
 
};
