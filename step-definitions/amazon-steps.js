const helpers = require("../runtime/helpers")
const { assert } = require("chai");
module.exports = function () {

    this.Given(/I am on the amazon page$/, function () {
        return helpers.loadPage(page.amazon.urls);
    });

    this.When(/^I click on the "([^"]*)"$/, function (objectKey1) {
        return page.amazon.clickElement1(objectKey1);
    });

    this.Then(/^I should see a "([^"]*)"$/, function (objectKey1) {
        return page.amazon.elementExists1(objectKey1);
    });
    this.When(/^I enter the login inputs$/, async function (table) {
        const fields = table.rows();
        console.log(fields);
        for (i = 0; i < fields.length; i++) {
            console.log(page.amazon.inputElement(fields[i][0], fields[i][1]));
        };
        await driver.sleep(3000);
        return;
    });
    this.When(/^I click on the "([^"]*)" and enter "([^"]*)"$/, async function (search,input) {
        return page.amazon.inputElement1(search,input);
    });
    this.Given(/^I Signed in Amazon Website as "([^"]*)" and "([^"]*)"$/, function (email,passw) {
        return page.amazon.loginPortal(email,passw);
    });
};
