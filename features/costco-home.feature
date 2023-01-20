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
    Scenario: Customer is logged into the costco portal automatically as a valid user
        Given I am on the costco portal
        When I click on "Grocery"
        Then I should see "CostcoGrocery"

    @costco @ctest6
    Scenario: Customer is displayed with search product in searchbtn
        Given I am on the costco portal
        When I click on "searchbox"
        And I enter the input "tv"
        And I click on "searchIcon"
        Then I should see "tvResults"

