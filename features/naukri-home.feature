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

  # @naukri @jobs
  # Scenario: Customer is displayed with naukri.com landing page and tries to view jobs
  #   Given I am on the naukri portal
  #   Then I should see "Login"#   When I click on "Jobs"
  #   Then I should see "emailtext"
  #   And I enter userName "username"
  #   And I enter userpassword "password"
  #   And I click on "submitBtn"
  #   Then I should see "Venkataprasad"
  #   When I click on "Jobs"
  #   Then I should see "RecommendedJobsforYou"





