// module.exports = function () {

//     this.Given('I am on the southernrailway portal', function () {
//         return helpers.loadPage(page.indianrail.url);
//     });

//     this.When(/^I click on "([^"]*)"$/, function (objectKey) {
//         return page.indianrail.clickElement(objectKey);
//     });

//     this.When(/^I enter userName "([^"]*)"$/, function (objKey1) {
//         return page.indianrail.inputUserName(objKey1);
//     });

//     this.When(/^I enter userpassword "([^"]*)"$/, function (objKey1) {
//         return page.indianrail.inputPassword(objKey1);
//     });
//     this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
//         return page.indianrail.elementExists(objectKey);
//     });

//     this.Given(/^I am logged on to the southernrailway portal as "([^"]*)"$/, function (user) {
//         return page.indianrail.loginPortal(user);
//     });

//     this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
//         return page.indianrail.verifyApproverName(value);
//     });
//     this.When(/^I enter the inputs for login$/, async function (table) {
//         const fields = table.rows();
//         for (i = 0; i < fields.length; i++) {
//             page.indianrail.inputElement(fields[i][0], fields[i][1]);
//         };
//         await driver.sleep(3000);
//         return;
//     });
// };