Feature: As a customer, I am able to view Kohls home page and access the option,login and place order

  @kohls @ktest1

  Scenario: Customer is displayed with Kohla page and able to navigate to my clearance page
    Given I am on the kohls page
    When I click on "shopbycategory"
    And I click on "clearance"
    Then I should see "clearancetxt"

  @kohls @ktest2
  Scenario: As a Customer, I am able open home page and write a review
    Given I am on the kohls page
    And I click on "searchbar" and enter "Baby Carter's 5-Pack Short-Sleeve Bodysuits"
    And I click on "writeareview"
    And I enter inputs
      | inputName  | inputValue                   |
      | title      | great product                |
      | reviewtext | Nicequality                  |
      | age        | 30                           |
      | Nickname   | bob27                        |
      | email      | Malathi.karmugelan@gmail.com |
    And I click on "isrecommonded"
    And I click on "Quality"
    And I click on "style"
    And I click on "postreview"
    Then I should see "reviewpostmessage"

  @kohls @ktest3
  Scenario: As a customer ,I am able to do the following for the particular item like select size, quantity and addto cart
    Given I am on the kohls page
    And I click on "searchbar" and enter "Baby Carter's 5-Pack Short-Sleeve Bodysuits"
    And I click on "size"
    And I click on "quantity"
    And I click on "addcart"
    And I click on "viewcart"
    And I should see "mycart"
    And I click on "checkout"
    Then I should see "Signinpg"


  @kohls @ktest4
  Scenario: As a customer, I logged into the kohls website and open cart and able to checkout the items in the cart
    Given I am on the kohls page
    When I click on "account"
    And I click on "signin"
    And I enter the inputs
      | InputName | InputValue                |
      | email     | Malathi.example@gmail.com |
      | password  | maex@1234                 |
    And I click on "signinbttn"
    And I click on "checkout"
    Then I should see "mycart"

  @kohls @ktest5
  Scenario: Logged into the kohls page and open mycart and delete the items in the cart
    Given I am on the kohls page
    When I logged into the kohls page as "malathi.examplegmail.com" and "maex@1234"
    And I click on "mycart"
    And I click on "delete"
    Then I should see "cartempty"