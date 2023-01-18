Feature: As a customer, I am able to view Amazon home page and access the option Like Login,Create a new account

    @amazon @atest1

    Scenario: Customer is displayed with Amazon page and able to navigate to Login page
        Given I am on the amazon page
        When I click on the "signin"
        Then I should see a "signinheader"

    @amazon @atest2
    Scenario: Customer is displayed with amazon home page and tries to login with valid input
        Given I am on the amazon page
        When I click on the "signin"
        And I enter the inputs for login
            | InputName | InputValue                   |
            | email     | Malathi.karmugelan@gmail.com |
        And I click on the "Continue"
        And I enter the inputs for login
            | InputName | InputValue |
            | password  | Deekshu@07 |
        And I click on the "Continue1"
        Then I should see a "HomePage"

    @amazon @atest3
    Scenario: Creating New Account in Amazon with Existing EmailId, so it display error message
        Given I am on the amazon page
        When I click on the "signin"
        And I click on the "Createnewaccount"
        And I enter the inputs for login
            | InputName     | InputValue                   |
            | customerName  | Deekshu                      |
            | email         | Malathi.karmugelan@gmail.com |
            | password      | Deekshu@07                   |
            | passwordCheck | Deekshu@07                   |
        And I click on the "verifyemail"
        Then I should see a "ErrorMessage"

    @amazon @atest4
    Scenario: Customer is logging into the Amazon Website and search iphone 13
        Given I Signed in Amazon Website as "Malathi.karmugelan@gmail.com" and "Deekshu@07"
        And I click on the "searchbar" and enter "iphone13"
        And I click on the "searchicon"
        Then  I should see a "iphoneproducts"



    @amazon @atest5
    Scenario: As a customer ,sign in and sign out of the Amazon Website
        Given I Signed in Amazon Website as "Malathi.karmugelan@gmail.com" and "Deekshu@07"
        And I click on the "all"
        And I click on the "signout"
        Then  I should see a "signinheader"