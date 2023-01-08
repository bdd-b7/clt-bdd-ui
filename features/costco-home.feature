Feature: As a costco customer, I want to be able to navigate to landing page so that I can view product information

 @costco @test
  Scenario: Customer is displayed with costco.com home page
    Given I am on the costcp portal
    When I click on "Login"
    Then I should see Login Page

@costco @costcoLogin
  Scenario: Customer is displayed with costco.com home page and tries to login into the portal
    Given I am on the costco portal
    And I enter the credentails for login
      | InputName | InputValue  |
      | userID  | indradivya@gmail.com|
      | password  | Ascent430$$ |
    Then I click on LoginButton

@costco @AddToCart
    Scenario: Customer want to add products on the costco.com
        Given I have logged in costco portal
        When I add product milk to the Cart 
        Then I see Cart is updated with milk product 

@costco @EditCart
    Scenario: Customer needs to edit (Add) in costco.com cart
        Given I have logged in costco protal with given credentails
        When I add cookies to the cart
        And I add extra 2 milks in existing cart
        Then I should see the above products are added to the cart

@costco @RemoveFromCart
    Scenario: Customer to delete the products from the cart of costco.com
      Given I have logged in costco protal with given credentails
       When I click on the cart button
        And I see  the list of products already added in the cart
        And I click on remove button near the cookies
        Then I see cart deleted the cookie product and updated

    