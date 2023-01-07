Feature: As a amazon customer, I want to be able to navigate to landing page so that I can view product information

  @amazon @find
  Scenario: Customer is displayed with amazon.com landing page
    Given I am on the amazon portal
    When I click on "Login"
    Then I should see "LoginHeader"

 @amazon @amazonLoginin
  Scenario: Customer is displayed with amazon.com landing page and tries to login into the portal
    Given I am on the amazon portal
    And I enter the inputs for login
    And I click on "LoginBtn"
    Then I should see "errorMessage"

  @amazon @amazonForgetpassword
  Scenario: Customer is displayed with Forget Password link
    Given I am on the amazon portal
    And I enter the inputs for login
    And I click on "LoginBtn"
    Then I should see Forgot Password link  

  @amazon @amazonsignup
  Scenario: Customer is displayed with signup link
    Given I am on the amazon portal
    And I enter the inputs for login
    And I click on "LoginBtn"
    Then I should see signup link