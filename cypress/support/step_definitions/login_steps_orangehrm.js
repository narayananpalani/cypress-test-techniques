import { loginOrangehrmPage } from '../../pageobjects/LoginOrangehrm_PageObjects'
Given('I open OrangeHRM homepage', () => {
    cy.visit('/');
});

//      When I SignIn as user:
When('I SignIn as user', () => {
    loginOrangehrmPage.signIn();
});

//Then the user name should be displayed:
Then('the user name should be displayed', () => {
    loginOrangehrmPage.verifyAccountNameDisplayed();
});