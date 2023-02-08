const helpers = require("../runtime/helpers")

module.exports = function () {
    //Given I am on the target website
    this.Given('I am on the target website', function(){
       return helpers.loadPage(page.target.urls)
    })

    //Given I am on facebook webpage
    this.Given('I am on facebook webpage', function(){
        return helpers.loadPage(page.target.urls)
     })
    //And I click "facebookLogin"
    this.When(/^I click "([^"]*)"$/, function (button1) {
        return page.target.clickButton(button1);
    });
    //Then I see "facebookLoginError"
    this.Then(/^I see "([^"]*)"$/, function(objectKey) {
        return page.target.elementExists(objectKey) 
    })
    //When I click on "signInRegister" home link
    this.When(/^I click on "([^"]*)" home link$/, function(objectKey) {
        return page.target.clickElement(objectKey)
     })

    //When I click on "signIn" link
    this.When(/^I click on "([^"]*)" link$/, function(objectKey) {
       return page.target.clickElement(objectKey)
    })

    //Then I should see "signInHeader"
    this.Then(/^I should see "([^"]*)"$/, function(objectKey) {
        return page.target.elementExists(objectKey) 
    })

    //And I enter the inputs for login
    this.When('I enter the inputs for login', async function (table) {
        //console.log('Table Data: ' +JSON.stringify(table.rows()))
        const inputs = table.rows()
        for(i = 0;i<inputs.length; i++) {
            page.target.inputElement(inputs[i][0], inputs[i][1])
        }
        await driver.sleep(3000);
        return;
    });

    //And I click on "loginButton"
    this.When(/^I click on "([^"]*)"$/, function (button1) {
        return page.target.clickButton(button1);
    });

    //Then I should get "errorMessage"
    this.Then(/^I should get "([^"]*)"$/, function (objectKey) {
        return page.target.elementExists(objectKey)
    });

    //Then I should get "welcomeMessage" homepage
    this.Then(/^I should get "([^"]*)" homepage$/, function (objectKey) {
        return page.target.elementExists(objectKey)
    });

    //And I click on "forgotPswd" target link
    this.When(/^I click on "([^"]*)" target link$/, function(objectKey) {
        return page.target.clickElement(objectKey)
     });

    //Then I should see "forgotPswdHeader" header
    this.Then(/^I should see "([^"]*)" header$/, function(objectKey) {
        return page.target.elementExists(objectKey) 
    });

    //When I click on "searchClick" box
    this.When(/^I click on "([^"]*)" box$/, function(objectKey) {
        return page.target.clickElement(objectKey)
    });

    //And I enter search term
    this.When('I enter search term', async function (table) {
        console.log('Table Data: ' +JSON.stringify(table.rows()))
        const inputs = table.rows()
        for(i = 0;i<inputs.length; i++) {
            page.target.inputElement(inputs[i][0], inputs[i][1])
        }
        await driver.sleep(3000);
        return;
    });

    //And I click on "search" icon
    this.When(/^I click on "([^"]*)" icon$/, function(objectKey) {
        return page.target.clickElement(objectKey)
    });

    //Then I should see "productResults" for search term
    this.Then(/^I should see "([^"]*)" for search term$/, function(objectKey) {
        return page.target.elementExists(objectKey) 
    });

    //And I click on search "productLink"
    this.When(/^I click on search "([^"]*)"$/, function(objectKey) {
        return page.target.clickElement(objectKey)
    });

    //And I click on "addCart" button
    this.When(/^I click on "([^"]*)" button$/, function(button1) {
        return page.target.clickButton(button1);
    });

    //Then I should see "addedMessage" headertext
    this.Then(/^I should see "([^"]*)" headertext$/, function(objKey) {
        return page.target.elementExists(objKey) 
    });
    
    //And I click on "createUser" account
    this.When(/^I click on "([^"]*)" account$/, function(button2) {
        return page.target.clickButton(button2);
    });

    //Then I should see "createAcctHead" create account header
    // this.Then(/^I should see "([^"]*)" create account header$/, function(objKey) {
    //     return page.target.elementExists(objKey) 
    // });

    //And I enter account inputs
    this.When('I enter account inputs', async function (table1) {
        console.log('Table Data: ' +JSON.stringify(table1.rows()))
        const fields = table1.rows()
        for(i = 0;i<fields.length; i++) {
            page.target.inputElement(fields[i][0], fields[i][1])
        }
        await driver.sleep(3000);
        return;
    });

    //And I click on "firstName" textbox
    this.When(/^I click on "([^"]*)" textbox$/, function(objectKey) {
        return page.target.clickElement(objectKey)
    });

    //Then I should see "enterValid" email message
    this.Then(/^I should see "([^"]*)" email message$/, function(objKey) {
        return page.target.elementExists(objKey) 
    });

    //And I click on "createAcct" button1
    this.When(/^I click on "([^"]*)" button1$/, function(button2) {
        return page.target.clickButton(button2);
    });

    //Then I should see "enterValidPswd" error message
    this.Then(/^I should see "([^"]*)" error message$/, function(objKey) {
        return page.target.elementExists(objKey) 
    });

    //Then I should see "doNotSee" error message in lists
    this.Then(/^I should see "([^"]*)" error message in lists$/, function(objKey) {
        return page.target.elementExists(objKey) 
    });

}