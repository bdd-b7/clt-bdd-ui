Feature: As a naukri customer, I want to be able to navigate to landing page so that I can view product information

  @naukri @run
  Scenario: Customer is displayed with naukri.com landing page
    Given I am on the naukri portal
    When I click on "Login"
    Then I should see "emailtext"
    And I should see "passwordtext"

  @naukri @naukriLoginin
  Scenario: Customer is displayed with naukri.com landing page and tries to login into the portal
    Given I am on the naukri portal
    When I click on "Login"
    Then I should see "emailtext"
    And I enter userName "username"
    And I enter userpassword "password"
    And I click on "submitBtn"
    Then I should see "Venkataprasad"

  @naukri @naukrisignup
  Scenario: Customer is displayed with naukri.com landing page
    Given I am on the naukri portal
    When I click on "Register"
    Then I should see "Findajobandgrowyourcareer"

  @naukri @jobs
  Scenario: Customer is displayed with naukri.com landing page
    Given I am on the naukri portal
    When I click on "jobs"
    Then I should see "Findyourdreamjobnow"

   @naukri @companies
  Scenario: Customer is displayed with naukri.com landing page
    Given I am on the naukri portal
    When I click on "companies"
    Then I should see "Topcompanieshiringnow"