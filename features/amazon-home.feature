Feature: As a amazon customer, I want to be able to navigate to landing page so that I can view product information

    @amazon @find
    Scenario: Customer is displayed with amazon.com landing page
        Given I am on the amazon portal
        When I click on "Signin"
        Then I should see "emailtext"
        And I should see "continue"

    @amazon @amazonLoginin
    Scenario: Customer is displayed with amazon.com landing page and tries to login into the portal
        Given I am on the amazon portal
        When I click on "Signin"
        And I enter userName "username"
        And I should see "continue"
        When I click on "continue"
        Then I should see "password"
        And I enter userpassword "password"
        And I click on "submitBtn"
        Then I should see "HelloVenkataprasad"

    @amazon @amazonreturnsandorders
    Scenario: Customer is displayed with amazon.com landing page and tries to display Returns and orders
        Given I am on the amazon portal
        When I click on "ReturnsandOrders"
        Then I should see "emailtext"

    @amazon @cart
    Scenario: Customer is displayed with amazon.com landing page and tries to display cart
        Given I am on the amazon portal
        When I click on "cart"
        Then I should see "YourAmazonCartisempty"

    @amazon @address
    Scenario: Customer is displayed with amazon.com landing page and tries to display address
        Given I am on the amazon portal
        When I click on "selectAddress"
        Then I should see "chooseyourLocation"    