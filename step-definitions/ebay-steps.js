// module.exports = function () {

//     this.Given('I am on the Ebay portal', function () {
//         return helpers.loadPage(page.Ebay.url);
//     });

//     this.When(/^I click on "([^"]*)"$/, function (objectKey) {
//          return page.Ebay.clickElement(objectKey);
//      });

//     this.When(/^I enter userName "([^"]*)"$/ , function(objKey1) {
//         return page.Ebay.inputUserName(objKey1);
//     });

//     this.When(/^I enter userpassword "([^"]*)"$/, function(objKey1) {
//         return page.Ebay.inputPassword(objKey1);
//     });
//     this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
//         return page.Ebay.elementExists(objectKey);
//     });


//     this.Given(/^I am logged on to the Ebay portal as "([^"]*)"$/, function (user) {
//         return page.Ebay.loginPortal(user);
//     });

//     this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
//         return page.Ebay.verifyApproverName(value);
//     });
//     this.When(/^I enter the inputs for login$/, async function (table) {
//         const fields = table.rows();
//         for (i = 0; i < fields.length; i++) {
//             page.Ebay.inputElement(fields[i][0], fields[i][1]);
//         };
//         await driver.sleep(3000);
//         return;
//     });


// };