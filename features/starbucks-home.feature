Feature: As a starbucks customer, I want to be able to click the join now button to sign up for loyalty program

@starbucks @test
Scenario: Customer is displayed with starbucks home page
Given I am on starbucks.com home page
When I click on JoinNow
Then I should see StarbucksRewards 

@star
Scenario: Customer is displayed with starbucks home page
Given I am on starbucks.com home page
Then I should see Menu