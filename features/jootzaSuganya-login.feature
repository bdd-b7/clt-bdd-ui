# Feature: As a jootza customer, I want to be able to navigate to jootza landing page

#   @jootzaLogin
#   Scenario: Customer is displayed with jootza.com landing page
#     Given I am on the jootza website
#     When I click on "signIn" link
#     Then I should see "signInHeader"

#   @jootzaInvalidCredentials
#   Scenario: Customer is displayed with jootza.com landing page and tries to login into the portal
#     Given I am on the jootza website
#     When I click on "signIn" link
#     # And I enter email "test1"
#     # And I enter password "test"
#     And I enter the inputs for login
#       | InputName | InputValue      |
#       | username  | test1@gmail.com |
#       | password  | test            |
#     And I click on "loginButton"
#     Then I should get "errorMessage"

#   @jootzaValidCredentials@test
#   Scenario: Customer is displayed with jootza.com landing page and tries to login into the portal
#     Given I am on the jootza website
#     When I click on "signIn" link
#     # And I enter email "test1"
#     # And I enter password "test"
#     And I enter the inputs for login
#       | InputName | InputValue      |
#       | username  | Suganya28 |
#       | password  | Hariom*28            |
#     And I click on "loginButton"
#     Then I should get "welcomeMessage" homepage

#   @validCredentials
#   Scenario Outline:Customer is logged into the jootza portal automatically as a valid user
#     Given I am logged on into the Jootza portal as "<username>" with "<password>"
#     Examples:
#       | username   | password |
#       | Shanuser12 | demo1234 |
#       | kavithas   | demo1234 |

#   @jootzaForgotPswd
#   Scenario: Customer is displayed with jootza.com landing page and tries to click forgot password link
#     Given I am on the jootza website
#     When I click on "signIn" link
#     And I click on "forgotPswd" jootza link
#     Then I should see "forgotPswdHeader" header