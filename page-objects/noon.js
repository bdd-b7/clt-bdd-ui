// const { assert } = require("chai");
// const helpers = require("../runtime/helpers");

// /* eslint-disable no-undef */
// module.exports = {

//     url: 'http://www.noon.com',

//     elements: {
//         Signin: '//*[@id="dd_header_signInOrUp"]',
//         emailtext: '//*[@id="__next"]/div[3]/div/div/div/div[2]/div[2]/label',
//         passwordtext: '//*[@id="__next"]/div[3]/div/div/div/div[2]/div[3]/label',
//         username: '//*[@id="emailInput"]',
//         password: '//*[@id="passwordInput"]',
//         SigninBtn: '//*[@id="login-submit"]',
//         errorMessage: '//*[@id="toast-container"]/mdb-toast-component/div',
//         submitBtn: '//*[@id="login-submit"]',
//         welcomePrasanna: '//*[@id="__next"]/div[1]/header/div[1]/div[2]/div[4]/div/button/span/span[1]',
//         invalidPassword: '//*[@id="__next"]/div[3]/div/div/div/div[2]/div[3]/div[2]/div/div',
//         singnUp: '//*[@id="__next"]/div[3]/div/div/div/div[2]/div[1]/h3[2]',
//         createAnaccount: '//*[@id="__next"]/div[3]/div/div/div/div[2]/h2',
//         allCategories: '//*[@id="__next"]/div[1]/header/div[2]/div/div/div[1]/a',
//         electronicsMobiles: '//*[@id="__next"]/div[1]/header/div[2]/div/div/div[2]/div[1]/span[1]/a',
//         beautyFragrences: '//*[@id="__next"]/div[1]/header/div[2]/div/div/div[2]/div[1]/span[2]/a',

//     },
//     content : {
//         'Adams, Jimmy': 'Adams, Jimmy',
//         'ADMIN, CLT' : 'ADMIN, CLT'
//     },
//     clickElement: async function(objectKey) {
//         var selector = page.noon.elements[objectKey];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).click();
//     },
//     inputUserName: async function(username) {
//         var selector = page.noon.elements[username]; 
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).sendKeys('parthiban.prasanna@gmail.com');

//     },
//     inputPassword: async function(password) {
//         var selector = page.noon.elements[password]; 
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).sendKeys('Paridhi123#');

//     },

//     inputwrongPassword: async function(password) {
//         var selector = page.noon.elements[password]; 
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).sendKeys('asdf');

//     },

//     inputElement: async function(name,val) {
//         var selector = page.noon.elements[name]; 
//         await driver.sleep(2000);
//         return driver.findElement(selector).sendKeys(val);

//     },
//     elementExists: async function(objectKey) {
//         // eslint-disable-next-line no-console
//         var selector = page.noon.elements[objectKey];

//         await driver.sleep(5000);
//         return driver.findElement(By.xpath(selector));
//     },
//     loginPortal: async function(username) {
//         await helpers.loadPage(page.noon.url);
//         await this.inputUserName(username)
//         await this.inputPassword(page.noon.elements['PasswordVal'])
//         await this.clickElement('LoginBtn')
//         await driver.sleep(2000); 
//         return;
//     },
//     verifyApproverName: async function(val) {
//         var selector = page.noon.elements['approverName'];
//         var result = await driver.findElement(By.xpath(selector)).getAttribute("value");
//         assert.equal(page.noon.content[val], result);
//     }
// };
