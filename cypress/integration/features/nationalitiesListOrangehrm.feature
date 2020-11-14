Feature: List Nationalities on Admin page
     
     Scenario: List Nationalities in Admin tab of the Orangehrm website
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I click on nationalities sub tab of admin page
      Then Nationality list should be displayed
      And Add button is shown on the page
      And Delete button is shown on the page
