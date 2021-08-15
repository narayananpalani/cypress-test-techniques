     Feature: Dropdown functionality tests of home page using accessibility navigation
     
     Scenario: Select sales manager job title in employees search list on PIM Tab using accessibility navigation-keyboard press Tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on PIM tab of home page
      And I navigate to jobtitle dropdown using keyboard functionality
      And I click on dropdown of jobtitle
      And I press enter on search button of pim tab
      Then search results should be displayed successfully


      Scenario: Type employee name in employees search list on PIM Tab using accessibility navigation-keyboard press shift tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on PIM tab of home page
      And I navigate to employee name field using keyboard functionality
      And I enter the name Peter using keyboard
      And I press enter on search button of pim tab
      Then search results should be displayed successfully