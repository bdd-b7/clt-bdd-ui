// module.exports = function () {

//     this.Given('I am on the Linkedin portal', function () {
//         return helpers.loadPage(page.Linkedin.url);
//     });

//     this.When(/^I click on "([^"]*)"$/, function (objectKey) {
//          return page.Linkedin.clickElement(objectKey);
//      });

//     this.When(/^I enter userName "([^"]*)"$/ , function(objKey1) {
//         return page.Linkedin.inputUserName(objKey1);
//     });

//     this.When(/^I enter userpassword "([^"]*)"$/, function(objKey1) {
//         return page.Linkedin.inputPassword(objKey1);
//     });
//     this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
//         return page.Linkedin.elementExists(objectKey);
//     });


//     this.Given(/^I am logged on to the Linkedin portal as "([^"]*)"$/, function (user) {
//         return page.Linkedin.loginPortal(user);
//     });

//     this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
//         return page.Linkedin.verifyApproverName(value);
//     });
//     this.When(/^I enter the inputs for login$/, async function (table) {
//         const fields = table.rows();
//         for (i = 0; i < fields.length; i++) {
//             page.Linkedin.inputElement(fields[i][0], fields[i][1]);
//         };
//         await driver.sleep(3000);
//         return;
//     });


// };