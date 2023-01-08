
const helpers = require("../runtime/helpers");

module.exports = {

url: {
    Netflix :'https://www.netflix.com/',
},

elements: {
    SignIn: '/html/body/div[1]/div/div/div/div/div/div[2]/div/a',
    Register: '/html/body/div[1]/div/div[3]/div/div/div[1]/h1',
},

clickElement: async function (ObjectKey) {
    var selector = page.netflix.elements[objectKey];
    await driver.sleep(2000);
    return driver.findElement(By.xpath(selector)).click();
},

elementExists: async function (ObjectKey) {
    var selector = page.netflix.elements[objectKey];
    await driver.sleep(3000);
    return driver.findElement(By.xpath(selector));
},
}