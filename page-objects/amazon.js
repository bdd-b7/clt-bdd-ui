// const { assert } = require("chai");
// const helpers = require("../runtime/helpers");

// /* eslint-disable no-undef */
// module.exports = {

//     url: 'http://www.amazon.com',

//     elements: {
//         Signin: '//*[@id="nav-link-accountList-nav-line-1"]',
//         emailtext: '//*[@id="authportal-main-section"]/div[2]/div/div[1]/form/div/div/div/div[1]/label',
//         passwordtext: '//*[@id="authportal-main-section"]/div[2]/div/div/div/form/div/div[1]/div[1]/div[1]/label',
//         username: '//*[@id="ap_email"]',
//         continue:'//*[@id="continue"]',        
//         password: '//*[@id="ap_password"]',
//         SigninBtn: '//*[@id="signInSubmit"]',
//         // errorMessage: '//*[@id="toast-container"]/mdb-toast-component/div',
//         UsernameVal: 'vbaskaran3@gmail.com',
//         PasswordVal: 'Vharsha3#',
//         submitBtn: '//*[@id="signInSubmit"]',
//         HelloVenkataprasad: '//*[@id="nav-link-accountList"]/span',        
//     },
//     content : {
//         'Adams, Jimmy': 'Adams, Jimmy',
//         'ADMIN, CLT' : 'ADMIN, CLT'
//     },
//     clickElement: async function(objectKey) {
//         var selector = page.amazon.elements[objectKey];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).click();
//     },
//     inputUserName: async function(username) {
//         var selector = page.amazon.elements[username]; 
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).sendKeys('vbaskaran3@gmail.com');

//     },
//     inputPassword: async function(password) {
//         var selector = page.amazon.elements[password]; 
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).sendKeys('Vharsha3#');

//     },
//     inputElement: async function(name,val) {
//         var selector = page.amazon.elements[name]; 
//         await driver.sleep(2000);
//         return driver.findElement(selector).sendKeys(val);

//     },
//     elementExists: async function(objectKey) {
//         // eslint-disable-next-line no-console
//         var selector = page.amazon.elements[objectKey];
//         await driver.sleep(5000);
//         return driver.findElement(By.xpath(selector));
//     },
//     loginPortal: async function(username) {
//         await helpers.loadPage(page.amazon.url);
//         await this.inputUserName(username)
//         await this.clickElement('continue')
//         await this.inputPassword(page.amazon.elements['PasswordVal'])
//         await this.clickElement('LoginBtn')
//         await driver.sleep(2000); 
//         return;
//     },
//     verifyApproverName: async function(val) {
//         var selector = page.amazon.elements['approverName'];
//         var result = await driver.findElement(By.xpath(selector)).getAttribute("value");
//         assert.equal(page.amazon.content[val], result);
//     }
// };