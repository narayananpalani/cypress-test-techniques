const user_role_selector_usermanagementpage= '#searchSystemUser_userType';
const search_selector_usermanagementpage= '#searchBtn';

export const userManagementOrangehrmPage = {
    searchUserByRole(role) {
        cy
            .get(user_role_selector_usermanagementpage)
            .select(role)
        cy
            .get(search_selector_usermanagementpage)
            .click()
    },

    verifyResultListByRole(role) {
        cy.get('tbody')
        .find('tr')
        .first()
        .children()
        .eq(2)
        .should('contain',role)
    }

}