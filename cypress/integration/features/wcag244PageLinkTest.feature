Feature: Verify the Link within OrangeHRM Website to adhere to WCAG Success Criterian 2.4.4 by having link text within html

   Scenario: WCAG SC244 Test on Page Links on Footer
      Given I open OrangeHRM homepage
      Then the link should be provided with url as per WCAG guidelines
      And the link should be provided with text as per WCAG guidelines