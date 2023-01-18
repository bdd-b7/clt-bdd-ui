// module.exports = function () {

//     this.Given('I am on the Ajio portal', function () {
//         return helpers.loadPage(page.Ajio.url);
//     });

//     this.When(/^I click on "([^"]*)"$/, function (objectKey) {
//          return page.Ajio.clickElement(objectKey);
//      });

//     this.When(/^I enter userName "([^"]*)"$/ , function(objKey1) {
//         return page.Ajio.inputUserName(objKey1);
//     });

//     this.When(/^I enter userpassword "([^"]*)"$/, function(objKey1) {
//         return page.Ajio.inputPassword(objKey1);
//     });
//     this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
//         return page.Ajio.elementExists(objectKey);
//     });


//     this.Given(/^I am logged on to the Ajio portal as "([^"]*)"$/, function (user) {
//         return page.Ajio.loginPortal(user);
//     });

//     this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
//         return page.Ajio.verifyApproverName(value);
//     });
//     this.When(/^I enter the inputs for login$/, async function (table) {
//         const fields = table.rows();
//         for (i = 0; i < fields.length; i++) {
//             page.Ajio.inputElement(fields[i][0], fields[i][1]);
//         };
//         await driver.sleep(3000);
//         return;
//     });


// };