import { terminalLog } from '../support/commands.js'
const inputUserName = '//input[@id=\'txtUsername\']'
const inputUserPassword = '#txtPassword'
const loginButtonSubmit = '//*[@id=\'btnLogin\']'
const label_Welcome = '//*[@id=\'welcome\']'
const pageTitle_Home = '//*[@title=\'OrangeHRM\']'
const loginPageLang = '//*[@lang=\'en\']'
const loginFooterLink = '//*[@href="http://www.orangehrm.com"]'
const loginFooterLinkText ='//*[contains(text(),"OrangeHRM, Inc")]'

export const loginOrangehrmPage = {
  launchPage () {
    cy.visit('/')
          .injectAxe()
  },
  enterUsername (args) {
    cy.xpath(inputUserName)
            .click()
            .clear()
            .type(args)
  },
  enterPassword (args) {
    cy.get(inputUserPassword)
            .click()
            .clear()
            .type(args)
  },
  clickSubmit () {
    cy.xpath(loginButtonSubmit)
            .click()
  },
  signIn () {
    cy.fixture('testdata').then((data) => {
      this.enterUsername(data.username)
      this.enterPassword(data.password)
      this.clickSubmit()
      cy.wait(2000)
    })
  },
  verifyAccountNameDisplayed () {
    cy.fixture('testdata').then((data) => {
      cy.xpath(label_Welcome)
            .invoke('text')
            .should('contain', `Welcome ${data.username}`)
    })

  },
  verifyPageTitle () {
    cy.xpath(pageTitle_Home)
            .should('exist')
  },
  verifyPageLanguage () {
    cy.xpath(loginPageLang)
            .should('exist')
  },
  a11yAuditAxe () {
    cy.checkA11y(null, null, terminalLog)
  },
  verifyPageFooterLink () {
    cy.xpath(loginFooterLink)
            .should('exist')
  },
  verifyFooterLinkTextCheck () {
    cy.xpath(loginFooterLinkText)
            .should('exist')
  }

}
