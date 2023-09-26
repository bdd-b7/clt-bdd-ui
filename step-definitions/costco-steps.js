// const helpers = require("../runtime/helpers")
// const { assert } = require("chai");
// module.exports = function () {

//     //Given I am on the "costco" portal

//     this.Given(/I am on the costco portal$/, function () {
//         return helpers.loadPage(page.costco.url);
//     });

//     this.When(/^I click on "([^"]*)"$/, function (objectKey) {
//          return page.costco.clickElement(objectKey);
//     });


//     this.When(/^I enter the input "([^"]*)"$/, function(objKey1) {
//         return page.costco.inputElement1(objKey1);
//     });

//     this.When(/^I enter the input in the form field "([^"]*)"$/, function(objKey1) {
//         return page.costco.inputPassword(objKey1);
//     });


//     this.When(/^I enter signInName "([^"]*)"$/, function(objKey1) {
//         return page.costco.inputUserName(objKey1);
//     });
    

//     this.When(/^I enter password "([^"]*)"$/, function(objKey1) {
//         return page.costco.inputPassword(objKey1);
//     });

//     this.Then(/^I should type "([^"]*)"$/, function(objectKey) {
//         return page.costco.inputElement(objectKey) 
//     });

// this.When(/^I click on the "([^"]*)" and enter "([^"]*)"$/, async function (search,input) {
//     return page.costco.inputElement1(search,input);
// });

//     this.Then(/^I should see "([^"]*)"$/, function(objectKey) {
//         return page.costco.elementExists(objectKey) 
//     });
    
//     this.Given(/^I am logged on into the costco portal as "([^"]*)" with "([^"]*)"$/, function (user,pass) {
//         return page.costco.loginPortal(user,pass);
//     });
    
//     this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
//         return page.costco.verifyApproverName(value);
//     });

//     this.When(/^I enter the inputs in the form fields$/, async function (table) {
//         const fields = table.rows();
//         console.log(fields);
//         for (i = 0; i < fields.length; i++) {
//             console.log(page.costco.inputElement(fields[i][0], fields[i][1]));
//         };
//         await driver.sleep(3000);
//         return;
//     });


// };