     Feature: Upload functionality tests of home page
     
     Scenario: Upload resume in recruitment tab of the Orangehrm website
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on Recruitment tab of home page
      And I click on Add button to add resume
      And I uploaded the resume successfully

    Scenario: Force Upload resume feature in recruitment tab of the Orangehrm website
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on Recruitment tab of home page
      And I click on Add button to add resume
      And I uploaded the resume forcefully