import { loginOrangehrmPage } from '../../pageobjects/LoginOrangehrm_PageObjects'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open OrangeHRM homepage', () => {
  loginOrangehrmPage.launchPage()
})

//I perform accessibility audit using axe
Given('I perform accessibility audit using axe', () => {
  loginOrangehrmPage.a11yAuditAxe()
})
//      When I SignIn as user:
When('I SignIn as user', () => {
  loginOrangehrmPage.signIn()
})

//Then the user name should be displayed:
Then('the user name should be displayed', () => {
  loginOrangehrmPage.verifyAccountNameDisplayed()
})

Then('the page title should exist on home page', () => {
  loginOrangehrmPage.verifyPageTitle()
})

Then('the language of the page should exist on login page', () => {
  loginOrangehrmPage.verifyPageLanguage()
})
