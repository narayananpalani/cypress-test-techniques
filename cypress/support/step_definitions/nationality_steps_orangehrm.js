import { nationalitiesOrangehrmPage } from '../../pageobjects/NationalitiesOrangehrm_PageObjects'

//Then Nationality list should be displayed
Then('Nationality list should be displayed', () => {
    nationalitiesOrangehrmPage.checkNationalitiesList();
});

//And Add button is shown on the page
Then('Add button is shown on the page', () => {
    nationalitiesOrangehrmPage.checkAddButton();
});

//And Delete button is shown on the page
Then('Delete button is shown on the page', () => {
    nationalitiesOrangehrmPage.checkDeleteButton();
});