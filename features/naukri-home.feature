Feature: As a naukri customer, I want to be able to navigate to landing page so that I can view product information

  @naukri @run
  Scenario: Customer is displayed with naukri.com landing page
    Given I am on the naukri portal
    When I click on "Login"
    Then I should see "LoginHeader"

 @naukri @naukriLoginin
  Scenario: Customer is displayed with naukri.com landing page and tries to login into the portal
    Given I am on the naukri portal
    And I enter the inputs for login
    And I click on "LoginBtn"
    Then I should see "errorMessage"

  @naukri @naukriForgetpassword
  Scenario: Customer is displayed with Forget Password link
    Given I am on the naukri portal
    And I enter the inputs for login
    And I click on "LoginBtn"
    Then I should see Forgot Password link  

  @naukri @naukrisignup
  Scenario: Customer is displayed with signup link
    Given I am on the naukri portal
    And I enter the inputs for login
    And I click on "LoginBtn"
    Then I should see signup link