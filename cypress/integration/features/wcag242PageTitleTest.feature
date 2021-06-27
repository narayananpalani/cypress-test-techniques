Feature: Verify the Page Title from Home Page of OrangeHRM Website to adhere to WCAG Success Criterian 2.4.2

   Scenario: WCAG SC242 Test on Page Title
      Given I open OrangeHRM homepage
      When I SignIn as user
      Then the page title should exist on home page
