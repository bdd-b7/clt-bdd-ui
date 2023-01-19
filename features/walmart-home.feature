Feature: as a walmart customer, i want to be able to navigate to landing page so that i can view walmart sign page

@walmart @test

scenario: customer is displayed with walmart.com landing page
Given i am on the walmart portal
when I click "signin "
Then i should see "account button"

@walmart @test
Scenario : customer is displayed with walmart.com landing page and tries to all Departments page into the portal
 Given  customer will be  on the walmart portal page 
 when i click the Department button
 Then I  to goto all Department page must open

 @walmart @test
 scenario : Customer is displayed with walmart.com and functionality to test the services button 
 given  I am on the walmart portal page 
 when I am click on the services button
 Then all services page must be opened

@walmart @test
@scenario :Customer is displayed with walmart.com and functionality to test the find  cart button 
given  I am on the walmart portal page 
 when I am click on the cart button
 Then find a cart () items page must be opened
