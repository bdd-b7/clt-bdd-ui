Feature: as a target customer, i want to be able to navigate to landing page so that i can view target sign page

@target @test1

scenario: customer is displayed with Target.com landing page
Given i am on the Target portal
when I click "signin "
Then i should see "account button"

@target @test2
Scenario : customer is displayed with target.com landing page and tries to signin into the portal
 Given  customer will be  on the Target portal page 
 when he click the registry button
 Then sign in to manage your registry page must open

 @target @test3
 scenario : Customer is displayed with target.com and functionality to test the weekly add button 
 given  I am on the Target portal page 
 when I am click on the weekly add button
 Then weekly add page must be opened

@target @test4
@scenario :Customer is displayed with target.com and functionality to test the find stores button 
given  I am on the Target portal page 
 when I am click on the find stores  button
 Then find a store  page must be opened