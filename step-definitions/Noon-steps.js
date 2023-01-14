module.exports = function () {

    this.Given('I am on the Noon portal', function () {
        return helpers.loadPage(page.noon.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.noon.clickElement(objectKey);
    });

    this.When(/^I enter userName "([^"]*)"$/ , function(objKey1) {
        return page.noon.inputUserName(objKey1);
    });

    this.When(/^I enter userpassword "([^"]*)"$/, function(objKey1) {
        return page.noon.inputPassword(objKey1);
    });
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.noon.elementExists(objectKey);
    });


    this.Given(/^I am logged on to the noon portal as "([^"]*)"$/, function (user) {
        return page.noon.loginPortal(user);
    });

    this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
        return page.noon.verifyApproverName(value);
    });
    this.When(/^I enter the inputs for login$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.noon.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(3000);
        return;
    });


};
