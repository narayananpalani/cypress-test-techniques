const add_selector_nationalitiespage= '#btnAdd';
const delete_selector_nationalitiespage= '#btnDelete';
const result_table_selector_nationalitiespage='#resultTable';

export const nationalitiesOrangehrmPage = {
    checkAddButton(){
        cy.get(add_selector_nationalitiespage)
          .invoke('show').should('be.visible')
    },

    checkDeleteButton(){
        cy.get(delete_selector_nationalitiespage)
          .invoke('show').should('be.visible')
    },

    checkNationalitiesList(){
        cy.get(result_table_selector_nationalitiespage)
        .invoke('show').should('be.visible');
    },

    clickAddButton(){
        cy.get(add_selector_nationalitiespage)
          .invoke('show').should('be.visible')
          .click();
    },

    doubleClickAddButton(){
        cy.get(add_selector_nationalitiespage)
          .invoke('show').should('be.visible')
          .dblclick();
    },
    
    clickDeleteButton(){
        cy.get(delete_selector_nationalitiespage)
          .invoke('show').should('be.visible')
          .click();
    }
}
