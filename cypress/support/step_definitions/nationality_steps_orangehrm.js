import { nationalitiesOrangehrmPage } from '../../pageobjects/NationalitiesOrangehrm_PageObjects'
//And I click on nationality checkbox for "Colombian" value
When('I click on nationality checkbox for Colombian value', () => {
    nationalitiesOrangehrmPage.selectNationality('Colombian');
});
//And I uncheck the Colombian checkbox
When('I uncheck the Colombian checkbox', () => {
    nationalitiesOrangehrmPage.uncheckNationality('Colombian');
})

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

//And I double click on Add button
Then('I double click on Add button', () => {
    nationalitiesOrangehrmPage.doubleClickAddButton();
});

//The Colombian checkbox is selected
Then('The Colombian checkbox is selected', () => {
    nationalitiesOrangehrmPage.verifyCheckedNationalities('Colombian');
});

//The Colombian checkbox is not selected
Then('The Colombian checkbox is not selected', () => {
    nationalitiesOrangehrmPage.verifyUncheckedNationality('Colombian');
})