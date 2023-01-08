Feature: As a Netflix customer, I want to be able to navigate to home page

  @Netflix @home
  Scenario: Customer is displayed with netflix.com home page
    Given I am on the netflix portal
    When I click on "sign In"
    Then I should see "Sign In"