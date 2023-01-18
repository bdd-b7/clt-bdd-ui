// const { assert } = require("chai");
// const helpers = require("../runtime/helpers");

// /* eslint-disable no-undef */
// module.exports = {

//     url: 'http://www.Myntra.com',

//     elements: {
//         Signin: '//*[@id="dd_header_signInOrUp"]',
//         emailtext: '//*[@id="__next"]/div[3]/div/div/div/div[2]/div[2]/label',
//         passwordtext: '//*[@id="__next"]/div[3]/div/div/div/div[2]/div[3]/label',
//         username: '//*[@id="emailInput"]',
//         password: '//*[@id="passwordInput"]',
//         SigninBtn: '//*[@id="login-submit"]',
//         errorMessage: '//*[@id="toast-container"]/mdb-toast-component/div',
//         UsernameVal: 'parthiban.prasanna@gmail.com',
//         PasswordVal: 'Paridhi123#',
//         submitBtn: '//*[@id="login-submit"]',
//         welcomePrasanna: '//*[@id="__next"]/div[1]/header/div[1]/div[2]/div[4]/div/button/span/span[1]',        
//     },
//     content : {
//         'Adams, Jimmy': 'Adams, Jimmy',
//         'ADMIN, CLT' : 'ADMIN, CLT'
//     },
//     clickElement: async function(objectKey) {
//         var selector = page.Myntra.elements[objectKey];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).click();
//     },
//     inputUserName: async function(username) {
//         var selector = page.Myntra.elements[username]; 
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).sendKeys('aravindbalajidme@gmail.com');

//     },
//     inputPassword: async function(password) {
//         var selector = page.Myntra.elements[password]; 
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).sendKeys('Paridhi123#');

//     },
//     inputElement: async function(name,val) {
//         var selector = page.Myntra.elements[name]; 
//         await driver.sleep(2000);
//         return driver.findElement(selector).sendKeys(val);

//     },
//     elementExists: async function(objectKey) {
//         // eslint-disable-next-line no-console
//         var selector = page.Myntra.elements[objectKey];

//         await driver.sleep(5000);
//         return driver.findElement(By.xpath(selector));
//     },
//     loginPortal: async function(username) {
//         await helpers.loadPage(page.Myntra.url);
//         await this.inputUserName(username)
//         await this.inputPassword(page.Myntra.elements['PasswordVal'])
//         await this.clickElement('LoginBtn')
//         await driver.sleep(2000); 
//         return;
//     },
//     verifyApproverName: async function(val) {
//         var selector = page.Myntra.elements['approverName'];
//         var result = await driver.findElement(By.xpath(selector)).getAttribute("value");
//         assert.equal(page.Myntra.content[val], result);
//     }
//  };