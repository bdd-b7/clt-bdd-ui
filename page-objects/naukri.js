// const { assert } = require("chai");
// const helpers = require("../runtime/helpers");

// /* eslint-disable no-undef */
// module.exports = {

//     url: 'http://www.naukri.com',

//     elements: {
//         Login: '//*[@id="login_Layer"]',
//         emailtext: '//*[@id="root"]/div[4]/div[2]/div/div/div[2]/div/form/div[2]/label',
//         passwordtext: '//*[@id="root"]/div[4]/div[2]/div/div/div[2]/div/form/div[3]/label',
//         username: '//*[@id="root"]/div[4]/div[2]/div/div/div[2]/div/form/div[2]/input',
//         password: '//*[@id="root"]/div[4]/div[2]/div/div/div[2]/div/form/div[3]/input',
//         SigninBtn: '//*[@id="root"]/div[4]/div[2]/div/div/div[2]/div/form/div[6]/button',
//         UsernameVal: 'vbaskaran3@gmail.com',
//         PasswordVal: 'Vharsha3#',
//         submitBtn: '//*[@id="root"]/div[4]/div[2]/div/div/div[2]/div/form/div[6]/button',
//         Venkataprasad: '//*[@id="root"]/div/div/span/div/div/div/div[2]/div/div[2]/div[1]/div/a[1]/div[2]/div[1]',
//         Register: '//*[@id="register_Layer"]',
//         Findajobandgrowyourcareer: '//*[@id="root"]/div/div/div[2]/div/div/div[1]/h1',
//         jobs: '//*[@id="root"]/div[4]/div[2]/nav/ul/li[1]/a',
//         Findyourdreamjobnow: '//*[@id="root"]/div[5]/h1',
//         companies: '//*[@id="root"]/div[4]/div[2]/nav/ul/li[2]/a',
//         Topcompanieshiringnow: '//*[@id="root"]/div[5]/h1',
//     },
//     content: {
//         'Adams, Jimmy': 'Adams, Jimmy',
//         'ADMIN, CLT': 'ADMIN, CLT'
//     },
//     clickElement: async function (objectKey) {
//         var selector = page.naukri.elements[objectKey];
//         await driver.sleep(3000);
//         return driver.findElement(By.xpath(selector)).click();
//     },
//     inputUserName: async function (username) {
//         var selector = page.naukri.elements[username];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).sendKeys('vbaskaran3@gmail.com');
//     },
//     inputPassword: async function (password) {
//         var selector = page.naukri.elements[password];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).sendKeys('Vharsha3#');
//     },
//     inputElement: async function (name, val) {
//         var selector = page.naukri.elements[name];
//         await driver.sleep(2000);
//         return driver.findElement(selector).sendKeys(val);

//     },
//     elementExists: async function (objectKey) {
//         // eslint-disable-next-line no-console
//         var selector = page.naukri.elements[objectKey];
//         await driver.sleep(5000);
//         return driver.findElement(By.xpath(selector));
//     },
//     loginPortal: async function (username) {
//         await helpers.loadPage(page.naukri.url);
//         await this.inputUserName(username)
//         await this.inputPassword(page.naukri.elements['PasswordVal'])
//         await this.clickElement('LoginBtn')
//         await driver.sleep(2000);
//         return;
//     },
//     verifyApproverName: async function (val) {
//         var selector = page.naukri.elements['approverName'];
//         var result = await driver.findElement(By.xpath(selector)).getAttribute("value");
//         assert.equal(page.naukri.content[val], result);
//     },

// };