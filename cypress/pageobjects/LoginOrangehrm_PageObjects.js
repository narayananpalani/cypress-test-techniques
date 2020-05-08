const inputUserName = '#txtUsername'; 
const inputUserPassword = '#txtPassword';
const loginButtonSubmit = "//*[@id='btnLogin']";
const label_Welcome = "//*[@id='welcome']";

export const loginOrangehrmPage = {
    enterUsername(args) {
        cy.get(inputUserName)
            .click()
            .clear()
            .type(args);
    },
    enterPassword(args) {
        cy.get(inputUserPassword)
            .click()
            .clear()
            .type(args)
    },
    clickSubmit() {
        cy.xpath(loginButtonSubmit)
            .click();
    },
    signIn() {
        cy.fixture('testdata').then((data) => {
            this.enterUsername(data.username);
            this.enterPassword(data.password);
            this.clickSubmit();
            cy.wait(2000);
        })
    },
    verifyAccountNameDisplayed() {
        cy.fixture('testdata').then((data) =>{
            cy.xpath(label_Welcome)
            .invoke('text')
            .should('contain', "Welcome "+data.username);
        })
       
    }

}
