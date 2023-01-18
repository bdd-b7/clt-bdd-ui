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

  @amazon @fresh
  Scenario: Customer is displayed with amazon.com landing page and tries to click fresh
    Given I am on the amazon portal
    When I click on "Signin"
    And I enter userName "username"
    And I should see "continue"
    When I click on "continue"
    Then I should see "password"
    And I enter userpassword "password"
    And I click on "submitBtn"
    And I click on "freshBtn"

  @amazon @today
  Scenario: Customer is displayed with amazon.com landing page and tries to click fresh
    Given I am on the amazon portal
    When I click on "Signin"
    And I enter userName "username"
    And I should see "continue"
    When I click on "continue"
    Then I should see "password"
    And I enter userpassword "password"
    And I click on "submitBtn"
    And I click on "todaysdealsBtn"

    @amazon @mob
  Scenario: Customer is displayed with amazon.com landing page and tries to click fresh
    Given I am on the amazon portal
    When I click on "Signin"
    And I enter userName "username"
    And I should see "continue"
    When I click on "continue"
    Then I should see "password"
    And I enter userpassword "password"
    And I click on "submitBtn"
    And I click on "mobilesBtn"

@amazon @new
  Scenario: Customer is displayed with amazon.com landing page and tries to click fresh
    Given I am on the amazon portal
    When I click on "Signin"
    And I enter userName "username"
    And I should see "continue"
    When I click on "continue"
    Then I should see "password"
    And I enter userpassword "password"
    And I click on "submitBtn"
    And I click on "newreleaseBtn"

    @amazon @best
  Scenario: Customer is displayed with amazon.com landing page and tries to click fresh
    Given I am on the amazon portal
    When I click on "Signin"
    And I enter userName "username"
    And I should see "continue"
    When I click on "continue"
    Then I should see "password"
    And I enter userpassword "password"
    And I click on "submitBtn"
    And I click on "bestsellerBtn"
