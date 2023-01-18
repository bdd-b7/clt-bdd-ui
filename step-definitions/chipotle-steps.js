// const helpers = require("../runtime/helpers")

// module.exports = function () {
//     //Given I am on the chipotle.com website
//     this.Given('I am on the chipotle website', function(){
//        return helpers.loadPage(page.chipotle.urls)

//     })
    
//    // When I click on Sign In link
//     this.When(/^I click on "([^"]*)" link$/, function(objectKey) {
//        return page.chipotle.clickElement(objectKey)
//     })

//     //Then I should see the Sign in header
//     this.Then(/^I should see "([^"]*)"$/, function(objectKey) {
//         return page.chipotle.elementExists(objectKey) 
//     })

//     // And I enter the inputs for login
//     // this.When(/^I enter email "([^"]*)"$/ , function(objKey1) {
//     //     return page.chipotle.inputUserName(objKey1);
//     // });

//     // this.When(/^I enter password "([^"]*)"$/, function(objKey1) {
//     //     return page.chipotle.inputPassword(objKey1);
//     // });

//     //And I enter the inputs for login
//     this.When('I enter the inputs for login', async function (table) {
//         console.log('Table Data: ' +JSON.stringify(table.rows()))
//         const inputs = table.rows()
//         for(i = 0;i<inputs.length; i++) {
//             page.chipotle.inputElement(inputs[i][0], inputs[i][1])
//         }
//         await driver.sleep(3000);
//         return;
//     });

//     //And I click on "loginButton"
//     this.When(/^I click on "([^"]*)"$/, function (button1) {
//         return page.chipotle.loginPortal(button1);
//     });

//     //Then I should get "errorMessage"
//     this.Then(/^I should get "([^"]*)"$/, function (objectKey) {
//         return page.chipotle.elementExists(objectKey)
//     });

//     //And I click on "forgotPswd" chipotle link
//     this.When(/^I click on "([^"]*)" chipotle link$/, function(objectKey) {
//         return page.chipotle.clickElement(objectKey)
//      })

//     //Then I should see "forgotPswdHeader" header
//     this.Then(/^I should see "([^"]*)" header$/, function(objectKey) {
//         return page.chipotle.elementExists(objectKey) 
//     })

   
// }
