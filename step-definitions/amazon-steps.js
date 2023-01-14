// module.exports = function () {

//     this.Given('I am on the amazon portal', function () {
//         return helpers.loadPage(page.amazon.url);
//     });

//     this.When(/^I click on "([^"]*)"$/, function (objectKey) {
//         return page.amazon.clickElement(objectKey);
//     });

//     this.When(/^I enter userName "([^"]*)"$/, function (objKey1) {
//         return page.amazon.inputUserName(objKey1);
//     });

//     this.When(/^I enter continue "([^"]*)"$/, function (objKey1) {
//         return page.amazon.continue(objKey1);
//     });

//     this.When(/^I enter userpassword "([^"]*)"$/, function (objKey1) {
//         return page.amazon.inputPassword(objKey1);
//     });
//     this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
//         return page.amazon.elementExists(objectKey);
//     });

//     this.Given(/^I am logged on to the amazon portal as "([^"]*)"$/, function (user) {
//         return page.amazon.loginPortal(user);
//     });

//     this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
//         return page.amazon.verifyApproverName(value);
//     });
//     this.When(/^I enter the inputs for login$/, async function (table) {
//         const fields = table.rows();
//         for (i = 0; i < fields.length; i++) {
//             page.amazon.inputElement(fields[i][0], fields[i][1]);
//         };
//         await driver.sleep(3000);
//         return;
//     });
// };