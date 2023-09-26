// const { assert } = require("chai");
// const helpers = require("../runtime/helpers");

// /* eslint-disable no-undef */
// module.exports = {

//     url: 'https://www.costco.com/',

//     elements: {
//         Register: '/html/body/header/div[2]/div/div/div/div[2]/div/div[4]/nav/ul/li[2]/a',
//         SignInHeader: '/html/body/div[2]/main/div/h1',
//         username: '//*[@id="emailInput"]',
//         password: '//*[@id="passwordInput"]',
//         SigninBtn: '//*[@id="login-submit"]',

//         signInName: by.id('signInName'), //*[@name="username"]
//         password: by.id('password'),
//         errorMessage: '//*[@id="PasswordResetUsingEmailAddressExchange"]',
//         UsernameVal: 'prkraam@gmail.com',
//         PasswordVal: 'Ascent430$$',
//         submitBtn: '//*[@id="next"]',
//         logo:'//*[@id="header-widget"]/div[2]/div/div/div/div[2]/div/div[1]/a/img',
//         Forgotpassword: '/html/body/div[2]/main/div/div[1]/form/div[3]/div[2]/div[3]/p',
//         searchbox: '//*[@id="search-field"]',
//         tv: '//*[@id="formcatsearch"]/div[2]/span[2]',
//          searchbar : '//*[@id="search-field"]',
//         searchIcon: '//*[@id="formcatsearch"]/div[2]/button/i',
//         tvResults:'//*[@id="category-name-header"]/h1',
//         keyword: by.id('keyword'),
//         Grocery: '//*[@id="Home_Ancillary_0"]',
//         CostcoGrocery:'//*[@id="search-results"]/div[1]/div[2]/div[1]/div/img',
//         Breakfast: '//*[@id="category-scrolllink"]/div[3]/div[5]/a/span/img'
       
//     },

//     content : {
//         'Shan Approver': 'Adams, Jimmy',
//         'Kavitha Approver' : 'ADMIN1, CLT'
//     },
//     clickElement: async function(objectKey) {
//         var selector = page.costco.elements[objectKey]; 
//         await driver.sleep(4000);
//         return driver.findElement(By.xpath(selector)).click();
//     },

//     inputUserName: async function(val) {
//         var selector = page.costco.elements['signInName']; 
//         await driver.sleep(2000);
//         return driver.findElement(selector).sendKeys(val);

//     },
//     inputPassword: async function(val) {
//         var selector = page.costco.elements['password']; 
//         await driver.sleep(2000);
//         return driver.findElement(selector).sendKeys(val);

//     },
    
//     inputElement: async function(name,val) {
//         var selector = page.costco.elements[name]; 
//         await driver.sleep(2000);
//         return driver.findElement(selector).sendKeys(val);

//     },

//     inputElement1: async function(name) {
//         var selector = page.costco.elements[name]; 
//         await driver.sleep(2000);
//         return driver.findElement(selector).sendKeys(name);

//     },

//     elementExists: async function(objectKey) {
//         var selector = page.costco.elements[objectKey];
//         await driver.sleep(5000);
//         return driver.findElement(By.xpath(selector));
//     },

//     loginPortal: async function(user,pass) {
//         await helpers.loadPage(page.costco.url);
//         await this.clickElement('Register')
//         await this.inputUserName(user);
//         await this.inputPassword(pass);
//         await this.clickElement('submitBtn');
//         await driver.sleep(2000); 
//         return;
//     },
//     verifyApproverName: async function(val) {
//         var selector = page.costco.elements['approverName'];
//         var result = await driver.findElement(By.xpath(selector)).getAttribute("value"); 
//         assert.equal(page.costco.content[val], result);
//     }
// };