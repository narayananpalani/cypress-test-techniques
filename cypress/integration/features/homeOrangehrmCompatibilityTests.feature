Feature: MouseEvents verification in various compatibility models of devices

Scenario: Mouseactions on Dashboard Tab Graph using iPhone6 Mobile
      Given I open OrangeHRM homepage
      When I SignIn as user
      When I see the page in iphone6 version
      When I perform move actions on dashboard graph
      Then text insights displayed below dashboard successfully

Scenario: Mouseactions on Dashboard Tab Graph using iPhonexr Mobile
      Given I open OrangeHRM homepage
      When I SignIn as user
      When I see the page in iphonexr version
      When I perform move actions on dashboard graph
      Then text insights displayed below dashboard successfully


Scenario: Mouseactions on Dashboard Tab Graph using macbook-15 device
      Given I open OrangeHRM homepage
      When I SignIn as user
      When I see the page in macbook-15 version
      When I perform move actions on dashboard graph
      Then text insights displayed below dashboard successfully 

Scenario: Mouseactions on Dashboard Tab Graph using iPad2 device
      Given I open OrangeHRM homepage
      When I SignIn as user
      When I see the page in iPad2 version
      When I perform move actions on dashboard graph
      Then text insights displayed below dashboard successfully