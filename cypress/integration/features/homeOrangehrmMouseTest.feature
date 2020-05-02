Feature: Home Page Mouse Movement Test on OrangeHRM website
   
   Scenario: Right Click on Admin Tab of home page
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I move mouse down on admin tab section
      Then the Admin tab should be displayed

Scenario: Touch start on Admin Tab of home page
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I move touchstart using mouse on admin tab section
      Then the Admin tab should be displayed
      
Scenario: Mouseover on Admin Tab Results of home page
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I mouseover on first row of results table of admin tab
      And I mouseover on second row of results table of admin tab
      Then the Admin tab should be displayed      

Scenario: Mouseleave on Admin Tab Results of home page
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on admin tab of home page
      And I mouseover on first row of results table of admin tab
      And I mouseleave on first row of results table of admin tab
      Then the Admin tab should be displayed 

Scenario: Mouseactions on Dashboard Tab Graph
      Given I open OrangeHRM homepage
      When I SignIn as user
      When I perform move actions on dashboard graph
      Then text insights displayed below dashboard successfully