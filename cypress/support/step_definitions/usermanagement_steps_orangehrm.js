import { userManagementOrangehrmPage } from "../../pageobjects/UserManagementOrangehrm_PageObjects"

//And I search users with "Admin" User Role
When('I search users with "Admin" User Role', () => {
    userManagementOrangehrmPage.searchUserByRole('Admin');
})

//The users from the list match with the user role "Admin"
Then('The users from the list match with the user role "Admin"', () => {
    userManagementOrangehrmPage.verifyResultListByRole('Admin')
})