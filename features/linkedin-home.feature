Feature: As a linkedin customer, I want to be able to navigate to landing page so that I can view product information

  @linkedin @find
  Scenario: Customer is displayed with linkedin.com landing page
    Given I am on the linkedin portal
    When I click on "Login"
    Then I should see "LoginHeader"

 @linkedin @linkedinLoginin
  Scenario: Customer is displayed with linkedin.com landing page and tries to login into the portal
    Given I am on the linkedin portal
    And I enter the inputs for login
    And I click on "LoginBtn"
    Then I should see "errorMessage"

  @linkedin @linkedinForgetpassword
  Scenario: Customer is displayed with Forget Password link
    Given I am on the linkedin portal
    And I enter the inputs for login
    And I click on "LoginBtn"
    Then I should see Forgot Password link  

  @linkedin @linkedinsignup
  Scenario: Customer is displayed with signup link
    Given I am on the linkedin portal
    And I enter the inputs for login
    And I click on "LoginBtn"
    Then I should see signup link