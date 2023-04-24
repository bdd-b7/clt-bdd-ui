const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    StarbucksUrl: 'https://www.starbucks.com/',
    
    elements: {
        JoinNow: '//*[@id="__next"]/header/nav/div[1]/div/div[2]/div[2]/div/a[3]',
        StarbucksRewards: '//*[@id="content"]/div[1]/div/h2',
        CreateAnAccount: '//*[@id="content"]/div[1]/div/h1',
    },
   
    
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.starbucks-objects.elements[objectKey]; // Login page.jootza.elements['Login']

        // selector will have //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
        await driver.sleep(2000);
        // const executedXPath = By.xpath(selector)
        // const ele = driver.findElement(executedXPath)
        // ele.click()
        return driver.findElement(By.xpath(selector)).click();
    },
   
    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.starbucks-objects.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
};