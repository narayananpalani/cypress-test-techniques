const admin_tabxPath_Homepage= "//*[@id='menu_admin_viewAdminModule']";
const admin_tabselector_Homepage= '#menu_admin_viewAdminModule';
const userDetail_Adminpage= "//*[@id='ohrmList_chkSelectAll']";
const pimTab_Homepage= "//*[@id='menu_pim_viewPimModule']";
const selectAll_pimTab= "//*[@id='ohrmList_chkSelectAll']"; 
const admin_resultTableRow1Column2= "//*[@id='resultTable']/tbody/tr[1]/td[2]";
const admin_resultTableRow2Column2= "//*[@id='resultTable']/tbody/tr[2]/td[2]";
const graph_dashboard= "//*[@id='div_graph_display_emp_distribution']";
const sectionBelowGraph= "//*[@id='hover_div_graph_display_emp_distribution']";
const pieChartLabel1= "//*[@id='pieLabel1']/div";
const pieChartLabel2= "//*[@id='pieLabel2']/div";
const pieChartLabel3= "//*[@id='pieLabel3']/div";
const pieChartLabel4= "//*[@id='pieLabel4']/div";

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
     clickAdminResultTableR1C2(){
        cy.xpath(admin_resultTableRow1Column2)
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
     },
     uncheckEmployees() {
      cy.xpath(selectAll_pimTab)
      .not('[disabled]')
      .should('be.checked')
      .uncheck();
   },
   noEmployeesSelected() {
      cy.xpath(selectAll_pimTab)
      .not('[disabled]')
      .should('not.be.checked');
   },
   mousedownAdminTab(){
      cy.xpath(admin_tabxPath_Homepage)
      .invoke('show').should('be.visible')
      .trigger('mousedown');
   },
   touchAdminTab(){
      cy.xpath(admin_tabxPath_Homepage)
      .invoke('show').should('be.visible')
      .trigger('touchstart');
   },
   mouseoverAdminTab(){
      cy.xpath(admin_tabxPath_Homepage)
      .invoke('show').should('be.visible')
      .trigger('mouseover');
   },
   mouseOverAdminResultTableR1C2(){
      cy.xpath(admin_resultTableRow1Column2)
      .invoke('show').should('be.visible')
      .trigger('mouseover');
   },
   mouseleaveAdminResultTableR1C2(){
      cy.xpath(admin_resultTableRow1Column2)
      .invoke('show').should('be.visible')
      .trigger('mouseleave');
   },
   mouseOverAdminResultTableR2C2(){
      cy.xpath(admin_resultTableRow2Column2)
      .invoke('show').should('be.visible')
      .trigger('mouseover');
   },
   mousActionsonDashboardGraph(){
      cy.xpath(graph_dashboard)
        .trigger('mousedown')
        .trigger('mousemove')
        .trigger('mouseup')
        .trigger('mouseleft', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mouseright', { which: 1, pageX: 600, pageY: 600 })
        .trigger('mouseleave');
   },

   textInsightsBelowGraph(){
      cy.xpath(sectionBelowGraph)
        .invoke('show').should('be.visible');
   },
   viewPortIphone6(){
      cy.viewport('iphone-6');
   },
   viewPortIphonexr(){
      cy.viewport('iphone-xr');
   },
   viewPortmac15(){
      cy.viewport('macbook-15');
   },
   viewPortipad2(){
      cy.viewport('ipad-2');
   }
};

