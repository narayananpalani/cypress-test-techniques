// capture snapshot
then('I capture snapshot and compare {string}', (string) => {
    cy.matchImageSnapshot(string);
});


/*
 assertions
*/
then(`I should see title {string}`, (title) => {
    cy.title()
        .should('include', title)
})
then(`I should see {string} text displayed`, (string) => {
    cy.contains(string)
        .invoke('show').should('be.visible');
})
then('The header should contain {string}', (string) => {
    cy.get('h1')
        .should('contain', string)
})
then('The sub-header should contain {string}', (string) => {
    cy.get('h2')
        .should('contain', string)
})
then('The header title should contain {string}', (string) => {
    cy.get('.header__title').invoke('text').then(function (text) {
        expect(text).to.include(string);
    })
})
then(`I should not see {string}`, (string) => {
    cy.contains(string, { timeout: 0 })
        .should('not.be.visible');
})
then(`I should not see text {string}`, (string) => {
    cy.xpath('//*[contains(text(),"' + string + '")]')
        .should('not.be.visible');
})
then('The current url should contain {string}', function (string) {
    cy.url()
        .should('contain', string)
});

/**
 * click action
 */
when('I click on {string}', (string) => {
    cy.xpath("//*[contains(text(),'" + string + "')]")
        .first().click();
})
then('I press button {string}', (string) => {
    cy.contains(string)
        .click();
    cy.wait(1000);
});


// url navigation
then('I go to {string}', (string) => {
    cy.visit(string);
});
then('I navigate to {string}', (string) => {
    cy.visit(string);
})
then('I reload page {string}', (string) => {
    cy.reload();
})
then('I go back {string}', (string) => {
    cy.go('back');
})
then('I go forward {string}', (string) => {
    cy.go('forward');
})
then('I go back to homepage', () => {
    cy.go('back')
})

// window handling
then('I wait for appReady state', () => {
    cy.window()
        .should('have.property', 'appReady', true);
})

// wait cmmds
then('I wait for {string} secs', (string) => {
    cy.wait(string * 1000);
})
then('I wait for few secs', () => {
    cy.wait(2000);
})

// logs
then('I log {string}', (string) => {
    cy.log(string);
    console.log(string);
})

// check URL response status - 200
then('I check all URL response status should be 200', function () {
    cy.checkURLResponseStatus();
})

