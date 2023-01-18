// const { assert } = require("chai");
// const helpers = require("../runtime/helpers");

// /* eslint-disable no-undef */
// module.exports = {

//     //JootzaUrl: 'http://www.jootza.com/login',
//     //WalmartUrl: 'https://www.walmart.com',
//     CostcoUrl: 'https://www.costco.com/',

//     content : {
//         'Adams, Jimmy': 'Adams, Jimmy',
//         'ADMIN, CLT' : 'ADMIN, CLT'
//     },
//     clickElement: async function(objectKey) {
//         // eslint-disable-next-line no-console
//         var selector = page.costco.elements[objectKey]; // Login page.jootza.elements['Login']

//         // selector will have //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
//         await driver.sleep(2000);
//         // const executedXPath = By.xpath(selector)
//         // const ele = driver.findElement(executedXPath)
//         // ele.click()
//         return driver.findElement(By.xpath(selector)).click();
//     },
//     clickElement1: async function(objectKey) {
//         // eslint-disable-next-line no-console
//         var selector = page.costco.elements[objectKey]; // Login page.jootza.elements['Login']

//         // selector will have //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
//         await driver.sleep(2000);
//         // const executedXPath = By.xpath(selector)
//         // const ele = driver.findElement1(executedXPath)
//         // ele.click()

//         return driver.findElement1(By.xpath(selector)).click();
//     },
//     inputElement: async function(name,val) {
//         var selector = page.costco.elements[name]; 
//         await driver.sleep(2000);
//         return driver.findElement(selector).sendKeys(val);

//     },
//     elementExists: async function(objectKey) {
//         // eslint-disable-next-line no-console
//         var selector = page.costco.elements[objectKey];

//         await driver.sleep(5000);
//         return driver.findElement(By.xpath(selector));
//     },
// };