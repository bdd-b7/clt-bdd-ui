// module.exports = {
//     urls:'https://www.jootza.com/',
        
//     elements:{
//         signIn : '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a',
//         signInHeader : '/html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[1]/h2/strong',
//         username : by.name('username'), //*[@name="username"]
//         password : by.name('password'), //*[@name="password"]
//         loginButton : '//*[@id="btn-login"]/button',
//         errorMessage : '//*[@id="toast-container"]/mdb-toast-component/div',
//         forgotPswd : '/html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[2]/form/div[4]/div/div[1]/a/p',
//         forgotPswdHeader : '/html/body/mdb-root/main/div/app-forgot-password/header/section/div/div/div/div/div/div/div[1]/h3/strong',
//         welcomeMessage : '/html/body/mdb-root/app-navigation/header/mdb-navbar/nav/div[2]/p/img',
//     },

//     clickElement: async function(objectKey) {
//         var selector = page.jootzaSuganya.elements[objectKey];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).click();
//         },
        
//     elementExists: async function(objectKey) {
//         var selector = page.jootzaSuganya.elements[objectKey];
//         await driver.sleep(3000);
//         return driver.findElement(By.xpath(selector));
//         },

//     inputElement: async function(name,val) {
//          var selector = page.jootzaSuganya.elements[name]; 
//         await driver.sleep(2000);
//         return driver.findElement(selector).sendKeys(val);
//         },
            
//     loginPortal: async function(button1) {
//         var selector = page.jootzaSuganya.elements[button1];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector)).click();
//         },
// }