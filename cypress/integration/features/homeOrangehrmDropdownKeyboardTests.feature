     Feature: Dropdown functionality tests of home page
     
     Scenario: User navigate from PIM Tab to previous page by pressing ALT LEFT
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I use keyboard to navigate to go back to the previous page
      
      Scenario: User navigate from Admin Tab to next page by pressing ALT RIGHT
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on PIM tab of home page
      And I use keyboard to navigate to go to the next page

      Scenario: User navigate from Admin Tab to next page by pressing ALT RIGHT
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on PIM tab of home page
      And I use keyboard to navigate to go to the next page

     Scenario: User perform page down from admin tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I use keyboard to perform page down

      Scenario: User perform page up from admin tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I use keyboard to perform page down
      And I use keyboard to perform page up
      And I use keyboard to perform multiple arrows from left right up down

      Scenario: User perform SelectAll from admin tab
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I use keyboard to perform page down
      And I use keyboard to perform select all
