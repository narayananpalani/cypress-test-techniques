const nationalities_tabselector_adminpage= '#menu_admin_nationality';

export const adminOrangehrmPage = {

    checkNationalitiesTab() {
        cy.get(nationalities_tabselector_adminpage)
          .invoke('show').should('be.visible');
      },
    clickNationalitiesTab(){
        cy.get(nationalities_tabselector_adminpage)
          .invoke('show').should('be.visible')
          .click({ force: true });
     }
}