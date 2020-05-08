     Feature: Dropdown functionality tests of home page
     
     Scenario: Select sales manager job title in employees search list on PIM Tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on PIM tab of home page
      And I click on dropdown of jobtitle
      And I click on search button of pim tab
      Then search results should be displayed successfully