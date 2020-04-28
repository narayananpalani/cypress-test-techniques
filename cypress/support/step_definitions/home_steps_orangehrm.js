import { homeOrangehrmPage } from '../../pageobjects/HomeOrangehrm_PageObjects'

//step definition for the feature file's line: And the Admin tab should be displayed
Then('the Admin tab should be displayed', () => {
   homeOrangehrmPage.checkAdminTab();
   //homeOrangehrmPage.checkAdminTabCssMethod();
   //homeOrangehrmPage.checkAdminTabTextMethod();
});

//And I click on admin tab of home page
When('I click on admin tab of home page', () => {
   homeOrangehrmPage.clickAdminTab();
});

//And I double click on admin tab of home page
When('I double click on admin tab of home page', () => {
   homeOrangehrmPage.dblclickAdminTab();
});

//Then the admin sub tab section displayed
Then('the admin sub tab section displayed', () => {
   homeOrangehrmPage.checkAdminTabSubsection();
});

//And I right click on admin tab of home page
When('I right click on admin tab of home page', () => {
   homeOrangehrmPage.rhtclickAdminTab();
});

//And I click on PIM tab of home page
When('I click on PIM tab of home page', () => {
   homeOrangehrmPage.clickPIMTab();
});
//And I select all employees in the employees list
When('I select all employees in the employees list', () => {
   homeOrangehrmPage.checkEmployees();
});

//Then all employees should be selected successfully
Then('all employees should be selected successfully', () => {
   homeOrangehrmPage.allEmployeesSelected();
});