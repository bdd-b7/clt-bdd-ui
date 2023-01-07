Feature: As a Noon customer, I want to be able to navigate to landing page so that I can view product information

  @Noon @find
  Scenario: Customer is displayed with Noon.com landing page
    Given I am on the Noon portal
    When I click on "Login"
    Then I should see "LoginHeader"

 @Noon @NoonLoginin
  Scenario: Customer is displayed with Noon.com landing page and tries to login into the portal
    Given I am on the Noon portal
    And I enter the inputs for login
    And I click on "Login"
    Then I should see "errorMessage"

  @Noon @NoonForgetpassword
  Scenario: Customer is displayed with Forget Password link
    Given I am on the Noon portal
    And I enter the inputs for login
    And I click on "Login"
    Then I should see Forgot Password link  

  @Noon @Noonsignup
  Scenario: Customer is displayed with signup link
    Given I am on the linkedin portal
    And I enter the inputs for login
    And I click on "Login"
    Then I should see signup link