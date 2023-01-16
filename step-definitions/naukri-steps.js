module.exports = function () {

    this.Given('I am on the naukri portal', function () {
        return helpers.loadPage(page.naukri.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.naukri.clickElement(objectKey);
    });

    this.When(/^I enter userName "([^"]*)"$/, function (objKey1) {
        return page.naukri.inputUserName(objKey1);
    });

    this.When(/^I enter userpassword "([^"]*)"$/, function (objKey1) {
        return page.naukri.inputPassword(objKey1);
    });
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.naukri.elementExists(objectKey);
    });

    this.Given(/^I am logged on to the naukri portal as "([^"]*)"$/, function (user) {
        return page.naukri.loginPortal(user);
    });

    this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
        return page.naukri.verifyApproverName(value);
    });
    this.When(/^I enter the inputs for login$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.naukri.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(3000);
        return;
    });
};