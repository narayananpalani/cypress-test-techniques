Feature: Login Page Accessibility Verification on OrangeHRM website

   Scenario: check valid login page display with login fields and perform accessibility checks
      Given I open OrangeHRM homepage
      And I perform accessibility audit using axe
