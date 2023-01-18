Feature: As a CollegeBoard customer,I want to be able to navigate to college board login screen
    @collegeboard @signin
    Scenario:Customer is displayed with collegeBoard.org landing page
        Given I am on the "collegeboard" website
        When I click on "SignInlink" link
        Then I should see "SignInHeader" header

    @collegeboard @profile
    Scenario:Customer is displayed with Why Take AP Course link
        Given I am on the "collegeboard" website
        When I click on "CSSProfilelink" link
        Then I should see "CSSProfile" header

    @collegeboard @sat
    Scenario: Customer is displayed with SAT link
        Given I am on the "collegeboard" website
        When I click on "SATlink" link
        Then I should see "SATSuiteofAssessments" header

    @collegeboard @bigfuture
    Scenario: Customer is displayed with AP link
        Given I am on the "collegeboard" website
        When I click on "BigFutureLink" link
        Then I should see "BigFuture" header

    @collegeboard @spring
    Scenario: Customer is displayed with Spring board
        Given I am on the "collegeboard" website
        When I click on "SpringBoardlink" link
        Then I should see "SpringBoard" header