// module.exports = {

//     url: 'https://www.disney.com/', 

//     elements: {
//         SignIn: '//*[@id="goc-user"]/li[1]/span[2]/a/u',  
//         DisneyAccount: '/html/body/div[1]/div[3]/div/div/form/header/div',
//         Shop: '//*[@id="Shop-dropdown"]', //  //*[@id="Shop-dropdown"]/u
//         ShopDisney: '/html/body/div[1]/header/nav/div/div[1]/div/div/div[1]/div[2]/a/img', 
//         GetTickets: '//*[@id="ref-1-2"]/div/div/ul/li/div[2]/div/div/p/span[1]/span/a/span',
//         Fandango: '//*[@id="global-header"]/nav/ul[1]/li[1]/a/svg',
//         email:'test123@test.com',
//         continue: '//*[@id="BtnSubmit"]',
//         password:'test',
//         SignIn2:'//*[@id="BtnSubmit"]',
//         emailid:'//*[@id="InputIdentityFlowValue"]'
//     },

//     clickElement: async function (objKey) {
//         var selector = page.disney.elements[objKey];
//        await driver.sleep(5000);
//         return driver.findElement(By.xpath(selector)).click();
//     },
        
//     elementExists: async function(objKey1) {
//             var selector = page.disney.elements[objKey1];
//             await driver.sleep(2000);
//             return driver.findElement(By.xpath(selector));
//         },
//     //         inputEmail: async function(val) {
//     //      var selector = page.disney.elements['emailid']; 
//     //      await driver.sleep(2000);
//     //      return driver.findElement(selector).sendKeys(val);

//     //  },
//     }