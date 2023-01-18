// // //const {driver} = require("selenium-webdriver/chrome")

// module.exports = {
// urls: 'https://www.indianrail.gov.in',

//      elements: {
//         // PNREnquiry: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a', //Xpath for login link
//         //INDIANRAILWAYSPASSENGERRESERVATIONENQUIRY: '/html/body/div[1]/div[1]/div[1]/h3',             
//          PNRstatusEnquiry: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a',
//          PassengerCurrentstatusEnquiry: '/html/body/div[2]/div[2]/div[2]/div[1]/div[1]/h3',
//      },

// clickElement: async function (objectKey) {
//     var selector = page.indianrail.elements[objectKey];
//     await driver.sleep(3000);
//     return driver.findElement(By.xpath(selector)).click();
// },
// inputUserName: async function (username) {
//     var selector = page.indianrail.elements[username];
//     await driver.sleep(2000);
//     return driver.findElement(By.xpath(selector)).sendKeys('vbaskaran3@gmail.com');
// },
// inputPassword: async function (password) {
//     var selector = page.indiarail.elements[password];
//     await driver.sleep(2000);
//     return driver.findElement(By.xpath(selector)).sendKeys('Vharsha3#');
// },
// inputElement: async function (name, val) {
//     var selector = page.indianrail.elements[name];
//     await driver.sleep(2000);
//     return driver.findElement(selector).sendKeys(val);

// },
// elementExists: async function (objectKey) {
//     // eslint-disable-next-line no-console
//     var selector = page.indianrail.elements[objectKey];
//     await driver.sleep(5000);
//     return driver.findElement(By.xpath(selector));
// },
// loginPortal: async function (username) {
//     await helpers.loadPage(page.indianrail.url);
//     await this.inputUserName(username)
//     await this.inputPassword(page.indianrail.elements['PasswordVal'])
//     await this.clickElement('LoginBtn')
//     await driver.sleep(2000);
//     return;
// },
// verifyApproverName: async function (val) {
//     var selector = page.indianrail.elements['approverName'];
//     var result = await driver.findElement(By.xpath(selector)).getAttribute("value");
//     assert.equal(page.indianrail.content[val], result);
// },

// };