const admin_tabxPath_Homepage= "//*[@id='menu_admin_viewAdminModule']";
const admin_tabselector_Homepage= '#menu_admin_viewAdminModule';
const userDetail_Adminpage= "//*[@id='ohrmList_chkSelectAll']";
const pimTab_Homepage= "//*[@id='menu_pim_viewPimModule']";
const selectAll_pimTab= "//*[@id='ohrmList_chkSelectAll']"; 



export const homeOrangehrmPage = {
    checkAdminTab() {
        cy.xpath(admin_tabxPath_Homepage)
        .invoke('show').should('be.visible');
    }, 

    checkAdminTabCssMethod() {
        cy.get(admin_tabselector_Homepage)
        .invoke('show').should('be.visible');
    },
    checkAdminTabTextMethod() {
        cy.contains("Admin")
        .invoke('show').should('be.visible');
     },
     clickAdminTab(){
        cy.xpath(admin_tabxPath_Homepage)
        .invoke('show').should('be.visible')
        .click();
     },
     dblclickAdminTab(){
        cy.xpath(admin_tabxPath_Homepage)
        .invoke('show').should('be.visible')
        .dblclick();
     },
     checkAdminTabSubsection(){
        cy.xpath(userDetail_Adminpage)
        .invoke('show').should('be.visible');
     },
     rhtclickAdminTab(){
        cy.xpath(admin_tabxPath_Homepage)
          .rightclick();
     },
     clickPIMTab() {
        cy.xpath(pimTab_Homepage)
        .invoke('show').should('be.visible')
        .click();
     },
     checkEmployees() {
        cy.xpath(selectAll_pimTab)
        .not('[disabled]')
        .check();
     },
     allEmployeesSelected() {
        cy.xpath(selectAll_pimTab)
        .not('[disabled]')
        .should('be.checked');
     }
};

