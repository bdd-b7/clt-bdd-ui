# Feature: As a Noon customer, I want to be able to navigate to landing page so that I can view product information

#   @Noon @run
#   Scenario: Customer is displayed with Noon.com landing page
#     Given I am on the Noon portal
#     When I click on "Signin"
#     Then I should see "emailtext"
#     And I should see "passwordtext"

#   @Noon @NoonLoginin
#   Scenario: Customer is displayed with Noon.com landing page and tries to login into the portal
#     Given I am on the Noon portal
#     When I click on "Signin"
#     And I enter userName "username"
#     And I enter userpassword "password"
#     And I click on "submitBtn"
#     Then I should see "welcomePrasanna"

#   @Noon @NoonInvalid
#   Scenario: Customer is displayed with Noon.com landing page and tries to login by entering wrong email and password
#     Given I am on the Noon portal
#     When I click on "Signin"
#     And I enter userName "username"
#     And I enter wrongpassword "password"
#     And I click on "submitBtn"
#     Then I should see "invalidPassword"


#   @Noon @Noonsignup
#   Scenario: Customer is displayed with signup link
#     Given I am on the Noon portal
#     When I click on "Signin"
#     And I click on "singnUp"
#     Then I should see "createAnaccount"

#   @Noon @Allcategories
#   Scenario: Customer is browsing electronics
#     Given I am on the Noon portal
#     When I click on "allCategories"
#     Then I should see "electronicsMobiles"
#     And I should see "beautyFragrences"

