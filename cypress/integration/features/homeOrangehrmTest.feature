Feature: Home Page Test on OrangeHRM website

   Scenario: Check valid home page tabs display
      Given I open OrangeHRM homepage
      When I SignIn as user
      Then the user name should be displayed
      And the Admin tab should be displayed
   
   Scenario: Click on Admin Tab of home page
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      Then the admin sub tab section displayed

   Scenario: Double Click on Admin Tab of home page
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I double click on admin tab of home page
      Then the admin sub tab section displayed

   Scenario: Right Click on Admin Tab of home page
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I right click on admin tab of home page
      Then the Admin tab should be displayed

    Scenario: Check all employees on PIM Tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on PIM tab of home page
      And I select all employees in the employees list
      Then all employees should be selected successfully

     Scenario: Uncheck all employees on PIM Tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on PIM tab of home page
      And I select all employees in the employees list
      And I uncheck all employees in the employees list
      Then no employees should be selected successfully

    Scenario: Select Sales Manager in employees list on PIM Tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on PIM tab of home page
      And I select sales manager in the employees list
      Then sales manager should be selected successfully

