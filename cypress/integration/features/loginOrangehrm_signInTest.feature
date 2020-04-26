Feature: Login Test on OrangeHRM website

   Scenario: Check valid signIn attempt with valid user and password credentials
      Given I open OrangeHRM homepage
      When I SignIn as user
      Then the user name should be displayed