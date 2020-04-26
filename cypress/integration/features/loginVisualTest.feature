Feature: OrangeHRM visual test


   Scenario: check OrangeHRM visual test
      Given I open OrangeHRM homepage
      And I capture snapshot and compare "loginpage"
      When I SignIn as user
      Then the user name should be displayed
      And I capture snapshot and compare "homepage"