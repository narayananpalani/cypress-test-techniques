     Feature: Recruitment page a11y checks

     # Scenario: Verify a11y violations on recruitment  by skipping failures
     #  Given I open OrangeHRM homepage
     #  When I SignIn as user
     #  And I click on Recruitment tab of home page
     #  Then I perform accessibility audit using axe by skipping failures

     # Scenario: Verify a11y critical violations on recruitment tab to check critical violations
     #  Given I open OrangeHRM homepage
     #  When I SignIn as user
     #  And I click on Recruitment tab of home page
     #  Then I perform accessibility audit using axe to check critical violations

           
     Scenario: Verify a11y violations on recruitment tab to check tags as per wcag
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on Recruitment tab of home page
      Then I perform accessibility audit using axe to check tags as per wcag

     #  Scenario: Verify a11y violations on recruitment tab
     #  Given I open OrangeHRM homepage
     #  When I SignIn as user
     #  And I click on Recruitment tab of home page
     #  Then I perform accessibility audit using axe