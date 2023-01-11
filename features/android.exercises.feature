Feature: Product store

  Background:
    Given User goes to login tab

  Scenario: User can login
    When the user complete the login fields
    Then the alert with 'You are logged in!' title is shown

  Scenario: User can signup
    When the user complete the signup form
    Then the alert with 'Signed Up' title is shown

  Scenario: User fills form
    Given User goes to form tab
    And the user fills fields
    Then the alert with 'This button is active' title is shown

