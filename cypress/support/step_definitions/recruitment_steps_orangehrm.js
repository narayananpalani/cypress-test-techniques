import { recOrangehrmPage } from '../../pageobjects/RecruitmentOrangehrm_PageObjects'
import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I click on Recruitment tab of home page', () => {
  recOrangehrmPage.clickRecTab()
})

When('I click on Add button to add resume', () => {
  recOrangehrmPage.clickAddRec()
})

Then('I uploaded the resume successfully', () => {
  recOrangehrmPage.uploadResume()
})

Then('I uploaded the resume forcefully', () => {
  recOrangehrmPage.uploadResumeForce()
})
