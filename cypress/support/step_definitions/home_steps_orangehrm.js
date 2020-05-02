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

//And I uncheck all employees in the employees list
When('I uncheck all employees in the employees list', () => {
   homeOrangehrmPage.uncheckEmployees();
});

//Then no employees should be selected successfully
Then('no employees should be selected successfully', () => {
   homeOrangehrmPage.noEmployeesSelected();
});

//And I move mouse down on admin tab section
When('I move mouse down on admin tab section', () => {
   homeOrangehrmPage.mousedownAdminTab();
});
When('I move touchstart using mouse on admin tab section', () => {
   homeOrangehrmPage.touchAdminTab();
});

//And I move mouseover using mouse on admin tab section
When('I move mouseover using mouse on admin tab section', () => {
   homeOrangehrmPage.mouseoverAdminTab();
});

//And I click on first row of results table of admin tab
When('I click on first row of results table of admin tab', () => {
   homeOrangehrmPage.clickAdminResultTableR1C2();
});

//And I mouseover on first row of results table of admin tab
When('I mouseover on first row of results table of admin tab', () => {
   homeOrangehrmPage.mouseOverAdminResultTableR1C2();
});

//And I mouseleave on first row of results table of admin tab
When('I mouseleave on first row of results table of admin tab', () => {
   homeOrangehrmPage.mouseleaveAdminResultTableR1C2();
});

When('I mouseover on second row of results table of admin tab', () => {
   homeOrangehrmPage.mouseOverAdminResultTableR2C2();
});

When('I perform move actions on dashboard graph', () => {
   homeOrangehrmPage.mousActionsonDashboardGraph();
});



//Then text insights displayed below dashboard successfully
Then('text insights displayed below dashboard successfully', () => {
   homeOrangehrmPage.textInsightsBelowGraph();
});
When ('I see the page in iphone6 version', () => {
   homeOrangehrmPage.viewPortIphone6();
});

When ('I see the page in iphonexr version', () => {
   homeOrangehrmPage.viewPortIphonexr();
});

When ('I see the page in macbook-15 version', () => {
   homeOrangehrmPage.viewPortmac15();
});

When ('I see the page in iPad2 version', () => {
   homeOrangehrmPage.viewPortipad2();
});
 

