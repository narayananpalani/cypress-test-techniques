Feature: User management functionality on OrangeHRM

Scenario: Select user role from dropdown to filter users
    Given I open OrangeHRM homepage
    When I SignIn as user
    And I click on admin tab of home page
    And I search users with "Admin" User Role
    Then The users from the list match with the user role "Admin"