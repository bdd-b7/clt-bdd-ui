// const helpers = require("../runtime/helpers")

// module.exports = function () {
//     //Given I am on the jootza website
//     this.Given('I am on the jootza website', function(){
//        return helpers.loadPage(page.jootzaSuganya.urls)

//     })
    
//    //When I click on "signIn" link
//     this.When(/^I click on "([^"]*)" link$/, function(objectKey) {
//        return page.jootzaSuganya.clickElement(objectKey)
//     })

//     //Then I should see "signInHeader"
//     this.Then(/^I should see "([^"]*)"$/, function(objectKey) {
//         return page.jootzaSuganya.elementExists(objectKey) 
//     })

//     //And I enter the inputs for login
//     this.When('I enter the inputs for login', async function (table) {
//         console.log('Table Data: ' +JSON.stringify(table.rows()))
//         const inputs = table.rows()
//         for(i = 0;i<inputs.length; i++) {
//             page.jootzaSuganya.inputElement(inputs[i][0], inputs[i][1])
//         }
//         await driver.sleep(3000);
//         return;
//     });

//     //And I click on "loginButton"
//     this.When(/^I click on "([^"]*)"$/, function (button1) {
//         return page.jootzaSuganya.loginPortal(button1);
//     });

//     //Then I should get "errorMessage"
//     this.Then(/^I should get "([^"]*)"$/, function (objectKey) {
//         return page.jootzaSuganya.elementExists(objectKey)
//     });

//     //Then I should get "welcomeMessage" homepage
//     this.Then(/^I should get "([^"]*)" homepage$/, function (objectKey) {
//         return page.jootzaSuganya.elementExists(objectKey)
//     });

//     //And I click on "forgotPswd" jootza link
//     this.When(/^I click on "([^"]*)" jootza link$/, function(objectKey) {
//         return page.jootzaSuganya.clickElement(objectKey)
//      })

//     //Then I should see "forgotPswdHeader" header
//     this.Then(/^I should see "([^"]*)" header$/, function(objectKey) {
//         return page.jootzaSuganya.elementExists(objectKey) 
//     })
// }