// module.exports = {
//     urls:'https://chipotle.com/',
    
//     elements:{
//         login : "/html/body/div[4]/div[1]/div[1]/div/div[1]/div/div",//Xpath for login link
//         loginHeader : "/html/body/div[4]/div[2]/span/div[2]/div/div/div/div[3]/div[1]/img",
//         email : "/html/body/div[4]/div[2]/span/div[2]/div/div/div/div[3]/div[4]/div/div/div[1]/form/div[1]",
//         password : "/html/body/div[2]/div[2]/span/div[2]/div/div/div/div[3]/div[4]/div/div/div[1]/form/div[2]/div/div[2]/input",
//         loginButton : "/html/body/div[4]/div[2]/span/div[2]/div/div/div/div[3]/div[4]/div/div/div[2]/div",
//         errorMessage : "/html/body/div[4]/div[2]/span/div[2]/div/div/div/div[3]/div[4]/div/div/div[2]/div[1]",
//         forgotPswd : "/html/body/div[4]/div[2]/span/div[2]/div/div/div/div[3]/div[4]/div/div/div[1]/div/div[2]/a",
//         forgotPswdHeader : "/html/body/div[4]/div[2]/span/div[2]/div/div/div/div[3]/div[3]/h1",
//     },
    
//     clickElement: async function(objectKey) {
//         var selector = page.chipotle.elements[objectKey];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).click();
//     },

//     elementExists: async function(objectKey) {
//         var selector = page.chipotle.elements[objectKey];
//         await driver.sleep(3000);
//         return driver.findElement(By.xpath(selector));
//     },

//     // inputUserName: async function(val) {
//     //     var selector = page.chipotle.elements['email']; 
//     //     await driver.sleep(2000);
//     //     return driver.findElement(selector).sendKeys(val);

//     // },
//     // inputPassword: async function(val) {
//     //     var selector = page.chipotle.elements['password']; 
//     //     await driver.sleep(2000);
//     //     return driver.findElement(selector).sendKeys(val);

//     // },

//     inputElement: async function(name,val) {
//         var selector = page.chipotle.elements[name]; 
//         await driver.sleep(2000);
//         return driver.findElement(selector).sendKeys(val);

//     },

//     loginPortal: async function(button1) {
//         var selector = page.chipotle.elements[button1];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).click();
//     },

//  }