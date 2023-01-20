Feature: As a amazon customer, I want to be able to navigate to landing page so that I can view product information

    @amazon @find
    Scenario: Customer is displayed with amazon.com landing page and tries to click Signin
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

    @amazon @amazonreturnsandOrders
    Scenario: Customer is displayed with amazon.com landing page and browses on amazon returns and orders
        Given I am on the amazon portal
        When I click on "returnsandOrders"
        Then I should see "emailtext"
        And I enter userName "username"
        And I should see "continue"
        When I click on "continue"
        Then I should see "password"
        And I enter userpassword "password"
        And I click on "submitBtn"

    @amazon @amazonCart
    Scenario: Customer is displayed with amazon.com landing page and checkes the cart
        Given I am on the amazon portal
        When I click on "cart"
        Then I should see "amazonCartempty"

    @amazon @amazonSelectaddress
      Scenario: Customer is displayed with amazon.com landing page and select address
        Given I am on the amazon portal
        When I click on "selectAddress"
        Then I should see "chooseyourLocation"
        When I click on "signIntosee"
        Then I should see "emailtext"
        And I enter userName "username"
        And I should see "continue"
        When I click on "continue"
        Then I should see "password"
        And I enter userpassword "password"
        And I click on "submitBtn"
