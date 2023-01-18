Feature: As a costco customer, I want to be able to navigate to landing page so that I can view product information

    @costco @ctest1
    Scenario: Customer is displayed with costco.com home page
        Given I am on the costco portal
        When I click on "Register"
        Then I should see "SignInHeader"

    @costco @ctest2
    Scenario: Customer is displayed with costco.com landing page and tries to login into the portal
        Given I am on the costco portal
        When I click on "Register"
        And I should see "SignInHeader"
        # And I enter userName "username"
        # And I enter userpassword "password"
        And I enter the inputs in the form fields
            | inputName  | inputValue        |
            | signInName | prkraam@gmail.com |
            | password   | Ascent430$        |
        And I click on "submitBtn"


    @costco @ctest3
    Scenario: Customer is displayed with Forget Password link
        Given I am on the costco portal
        When I click on "Register"
        And I should see "SignInHeader"
        And I enter the inputs in the form fields
            | inputName  | inputValue        |
            | signInName | prkraam@gmail.com |
        And I click on "submitBtn"
        Then I should see "Forgotpassword"


    @costco @ctest4
    Scenario: Customer is displayed with search product in searchbtn
        Given I am on the costco portal
        When I click on "Grocery"
        And I should see "CostcoGrocery"
        And I click on "Breakfast"


    @costco @ctest5
    Scenario:Customer is logged into the costco portal automatically as a valid user
        Given I am on the costco portal
        When I click on "Grocery"
        Then I should see "CostcoGrocery"


    # @costco @ctest6
    # Scenario: Customer is displayed with search product in searchbtn
    #     Given I am on the costco portal
    #     When I click on "searchbox"
    #     And I enter the input "tv"
    #     And I click on "searchIcon"
    #     Then I should see "tvResults"





# @costco @AddToCart
#     Scenario: Customer want to add products on the costco.com
#         Given I have logged in costco portal
#         When I add product milk to the Cart
#         Then I see Cart is updated with milk product

# @costco @EditCart
#     Scenario: Customer needs to edit (Add) in costco.com cart
#         Given I have logged in costco protal with given credentails
#         When I add cookies to the cart
#         And I add extra 2 milks in existing cart
#         Then I should see the above products are added to the cart

# @costco @RemoveFromCart
#     Scenario: Customer to delete the products from the cart of costco.com
#       Given I have logged in costco protal with given credentails
#        When I click on the cart button
#         And I see  the list of products already added in the cart
#         And I click on remove button near the cookies
#         Then I see cart deleted the cookie product and updated

