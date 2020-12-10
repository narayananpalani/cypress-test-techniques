Feature: List Nationalities on Admin page
     
     Scenario: List Nationalities in Admin tab of the Orangehrm website
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I click on nationalities sub tab of admin page
      Then Nationality list should be displayed
      And Add button is shown on the page
      And Delete button is shown on the page
      And I double click on Add button

     Scenario: Select Colombian nationality in Admin tab of the Orangehrm website
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I click on nationalities sub tab of admin page
      And I click on nationality checkbox for Colombian value
      And I uncheck the Colombian checkbox
      Then The Colombian checkbox is not selected 

     Scenario: Click Nationalities in Admin tab and try righ click on Configuration tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I click on nationalities sub tab of admin page
      And I right click on configuration sub tab of admin page
      Then Nationality list should be displayed
      And Add button is shown on the page
      And Delete button is shown on the page