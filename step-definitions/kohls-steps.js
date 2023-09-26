const helpers = require("../runtime/helpers")
module.exports = function () {

    this.Given(/I am on the kohls page$/, function () {
        return helpers.loadPage(page.kohls.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.kohls.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.kohls.elementExists(objectKey);
    });
    this.When(/^I click on "([^"]*)" and enter "([^"]*)"$/, async function (search,input) {
        return page.kohls.inputElemnt(search,input);
    });
    this.When(/^I enter the inputs for login$/, async function (table) {
        const fields = table.rows();
        console.log(fields);
        for (i = 0; i < fields.length; i++) {
            console.log(page.kohls.inputElemnt(fields[i][0], fields[i][1]));
        };
        await driver.sleep(3000);
        return;
    });
};