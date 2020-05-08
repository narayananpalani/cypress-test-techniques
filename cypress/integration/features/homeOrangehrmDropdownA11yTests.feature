     Feature: Dropdown functionality tests of home page using accessibility navigation
     
     Scenario: Select sales manager job title in employees search list on PIM Tab using accessibility navigation
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on PIM tab of home page
      And I navigate to jobtitle dropdown using keyboard functionality
      And I click on dropdown of jobtitle
      And I press enter on search button of pim tab
      Then search results should be displayed successfully