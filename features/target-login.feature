Feature: As a target customer, I want to be able to navigate to target landing page

    @targetLogin@test
    Scenario: Customer is displayed with target.com landing page
        Given I am on the target website
        When I click on "signInRegister" home link
        And I click on "signIn" link
        Then I should see "signInHeader"

    @targetForgotPswd@test
    Scenario: Customer is displayed with target.com landing page and tries to click forgot password link
        Given I am on the target website
        When I click on "signInRegister" home link
        And I click on "signIn" link
        And I click on "forgotPswd" target link
        Then I should see "forgotPswdHeader" header

    @targetInvalidCredentials@test
    Scenario: Customer is displayed with target.com landing page and tries to login into the portal
        Given I am on the target website
        When I click on "signInRegister" home link
        And I click on "signIn" link
        # And I enter email "test1"
        # And I enter password "test"
        And I enter the inputs for login
            | InputName | InputValue        |
            | username  | suganya@gmail.com |
            | password  | sugan*1           |
        And I click on "loginButton"
        Then I should get "errorMessage"

    @targetValidCredentials
    Scenario: Customer is displayed with target.com landing page and tries to login into the portal
        Given I am on the target website
        When I click on "signInRegister" home link
        And I click on "signIn" link
        # And I enter email "test1"
        # And I enter password "test"
        And I enter the inputs for login
            | InputName | InputValue          |
            | username  | rameshsct@gmail.com |
            | password  | Hariom*1            |
        And I click on "loginButton"
        Then I should get "welcomeMessage" homepage

    @targetSearchProduct@test
    Scenario: Customer is displayed with target.com landing page and tries to search the product
        Given I am on the target website
        When I click on "searchClick" box
        And I enter search term
            | InputName  | InputValue |
            | searchText | airpod     |
        And I click on "search" icon
        Then I should see "productResults" for search term
        # And I click on search "productLink"
        # And I click on "addCart" button
        # Then I should see "addedMessage" popup



