const { assert } = require("chai");
const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given('I am on the Petsmart portal', function () {
        return helpers.loadPage(page.pet.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
    return page.pet.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function(objectKey) {
    return page.pet.elementExists(objectKey) 
    });


};