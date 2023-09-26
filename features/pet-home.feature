Feature: As a Petsmart customer, I am able to navigate petsmart page

@Petsmart  @P1
Scenario: Customer is displayed with jootza.com landing page
Given I am on the Petsmart portal
When I click on "SignIn"
Then I should see "returningCustomers"

@P2 
Scenario: Customer can able to access different type of fish
Given I am on the Petsmart portal
When I click on "ShopByPet"
Then I click on "Fish"
Then I should see "text"




