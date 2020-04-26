Feature: Login Page Verification on OrangeHRM website

   Scenario: check valid login page display with login fields
      Given I open OrangeHRM homepage
      Then I should see title "OrangeHRM"
      Then I should see "LOGIN Panel" text displayed
      And I should see "Alternative Login" text displayed