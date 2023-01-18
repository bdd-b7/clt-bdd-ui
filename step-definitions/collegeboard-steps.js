const helpers = require("../runtime/helpers");
module.exports = function () {
  this.Given(/^I am on the "([^"]*)" website$/, function (objectkey) {
    return helpers.loadPage(page.collegeboard.urls[objectkey],5000);
  });
  this.When(/^I click on "([^"]*)" link$/, function (objectkey) {
    return page.collegeboard.clickElement(objectkey);
  });
  this.Then(/^I should see "([^"]*)" header$/, function (objectkey) {
    return page.collegeboard.elementExists(objectkey);
  });
};
