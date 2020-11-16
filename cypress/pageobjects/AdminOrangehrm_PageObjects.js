const nationalities_tabselector_adminpage= '#menu_admin_nationality';
const nationalities_xpath_adminpage= '//*[@id="menu_admin_nationality"]';

export const adminOrangehrmPage = {

    checkNationalitiesTab() {
        cy.get(nationalities_tabselector_adminpage)
          .invoke('show').should('be.visible');
      },
    clickNationalitiesTab(){
        cy.get(nationalities_tabselector_adminpage)
          .invoke('show')
          .click({ visible: true, force: true });
     }
}