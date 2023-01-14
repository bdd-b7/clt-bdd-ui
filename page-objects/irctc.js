// //const {driver} = require("selenium-webdriver/chrome")

// module.exports = {
//     urls: 'https://irctc.co.in/',

//     elements: {
//         Login: '/html/body/app-root/app-home/div[1]/app-header/div[2]/div[2]/div[1]/a[1]',//Xpath for login link
//         loginHeader: '//*[@id="login_header_disable"]/div/div/div[2]',

//     },

//     clickElement: async function (objectKey) {
//         var selector = page.irctc.elements[objectKey];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).click();
//     },

//     elementExists: async function (objectKey) {
//         var selector = page.irctc.elements[objectKey];
//         await driver.sleep(3000);
//         return driver.findElement(By.xpath(selector));
//     }
// }