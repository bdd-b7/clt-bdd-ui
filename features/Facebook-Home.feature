Feature: As a Facebook customer, I want to be able to navigate to landing poage so that I can view site information

  @Facebook@test
  Scenario: Customer is displayed with Facebook.com landing page
    Given I am on the Facebook portal
    When I click on "Login"
    Then I should see "LoginHeader"