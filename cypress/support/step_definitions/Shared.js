import { When, Then } from 'cypress-cucumber-preprocessor/steps'

const lighthousemetrics = {
  performance: 95,
  accessibility: 100,
  "best-practices": 95,
  seo: 85,
  pwa: 100,
};

// capture snapshot
Then('I capture snapshot and compare {string}', (string) => {
  cy.matchImageSnapshot(string)
})

/*
 assertions
*/
Then('I should see title {string}', (title) => {
  cy.title().should('include', title)
})
Then('I should see {string} text displayed', (string) => {
  cy.contains(string).invoke('show').should('be.visible')
})
Then('The header should contain {string}', (string) => {
  cy.get('h1').should('contain', string)
})
Then('The sub-header should contain {string}', (string) => {
  cy.get('h2').should('contain', string)
})
Then('The header title should contain {string}', (string) => {
  cy.get('.header__title')
    .invoke('text')
    .Then(function (text) {
      expect(text).to.include(string)
    })
})
Then('I should not see {string}', (string) => {
  cy.contains(string, { timeout: 0 }).should('not.be.visible')
})
Then('I should not see text {string}', (string) => {
  cy.xpath(`//*[contains(text(),"${string}")]`).should('not.be.visible')
})
Then('The current url should contain {string}', function (string) {
  cy.url().should('contain', string)
})

/**
 * click action
 */
When('I click on {string}', (string) => {
  cy.xpath(`//*[contains(text(),'${string}')]`).first().click()
})
Then('I press button {string}', (string) => {
  cy.contains(string).click()
  cy.wait(1000)
})

// url navigation
Then('I go to {string}', (string) => {
  cy.visit(string)
})
Then('I navigate to {string}', (string) => {
  cy.visit(string)
})
Then('I reload page {string}', (string) => {
  cy.log(string)
  cy.reload()
})
Then('I go back {string}', (string) => {
  cy.log(string)
  cy.go('back')
})
Then('I go forward {string}', (string) => {
  cy.log(string)
  cy.go('forward')
})
Then('I go back to homepage', () => {
  cy.go('back')
})

// window handling
Then('I wait for appReady state', () => {
  cy.window().should('have.property', 'appReady', true)
})

// wait cmmds
Then('I wait for {string} secs', (string) => {
  cy.wait(string * 1000)
})
Then('I wait for few secs', () => {
  cy.wait(2000)
})

// logs
Then('I log {string}', (string) => {
  cy.log(string)
})

// check URL response status - 200
Then('I check all URL response status should be 200', function () {
  cy.checkURLResponseStatus()
})

Then('I should see web audit results', function () {
  cy.lighthouse(lighthousemetrics);
})
 
Then('I should see web accessibility audit results', function () {
  cy.pa11y();
})