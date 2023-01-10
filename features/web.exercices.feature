Feature: Product store

  Background:
    Given User lands on main page

  Scenario: User can register
    When the user completes the register form
    Then the message 'Sign up successful.' is shown

  Scenario: User can login and logout
    When user login
    Then user can see his username on nav bar
    And user logout
    Then user cannot see his username on nav bar

  Scenario: User can add a laptop to cart
    When the user goes to laptop list
    And add a laptop to cart
    Then the laptop is added to the cart
