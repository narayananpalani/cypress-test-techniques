Feature: Home Page Visual Test on OrangeHRM website

    Scenario: Check all employees on PIM Tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on PIM tab of home page
      And I select all employees in the employees list
      Then all employees should be selected successfully
      And I capture snapshot and compare "pimTab"

     Scenario: Uncheck all employees on PIM Tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on PIM tab of home page
      And I select all employees in the employees list
      And I uncheck all employees in the employees list
      Then no employees should be selected successfully
      And I capture snapshot and compare "pimTab"

    