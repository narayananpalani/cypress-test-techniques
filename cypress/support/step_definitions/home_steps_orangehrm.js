import { homeOrangehrmPage } from '../../pageobjects/HomeOrangehrm_PageObjects'
import { When, Then } from 'cypress-cucumber-preprocessor/steps'

//step definition for the feature file's line: And the Admin tab should be displayed
Then('the Admin tab should be displayed', () => {
  homeOrangehrmPage.checkAdminTab()
  //homeOrangehrmPage.checkAdminTabCssMethod();
  //homeOrangehrmPage.checkAdminTabTextMethod();
})

//And I click on admin tab of home page
When('I click on admin tab of home page', () => {
  homeOrangehrmPage.clickAdminTab()
})

//And I double click on admin tab of home page
When('I double click on admin tab of home page', () => {
  homeOrangehrmPage.dblclickAdminTab()
})

//Then the admin sub tab section displayed
Then('the admin sub tab section displayed', () => {
  homeOrangehrmPage.checkAdminTabSubsection()
})

//And I right click on admin tab of home page
When('I right click on admin tab of home page', () => {
  homeOrangehrmPage.rhtclickAdminTab()
})

//And I click on PIM tab of home page
When('I click on PIM tab of home page', () => {
  homeOrangehrmPage.clickPIMTab()
})
//And I select all employees in the employees list
When('I select all employees in the employees list', () => {
  homeOrangehrmPage.checkEmployees()
})

//Then all employees should be selected successfully
Then('all employees should be selected successfully', () => {
  homeOrangehrmPage.allEmployeesSelected()
})

//And I uncheck all employees in the employees list
When('I uncheck all employees in the employees list', () => {
  homeOrangehrmPage.uncheckEmployees()
})

//Then no employees should be selected successfully
Then('no employees should be selected successfully', () => {
  homeOrangehrmPage.noEmployeesSelected()
})

//And I move mouse down on admin tab section
When('I move mouse down on admin tab section', () => {
  homeOrangehrmPage.mousedownAdminTab()
})
When('I move touchstart using mouse on admin tab section', () => {
  homeOrangehrmPage.touchAdminTab()
})

//And I move mouseover using mouse on admin tab section
When('I move mouseover using mouse on admin tab section', () => {
  homeOrangehrmPage.mouseoverAdminTab()
})

//And I click on first row of results table of admin tab
When('I click on first row of results table of admin tab', () => {
  homeOrangehrmPage.clickAdminResultTableR1C2()
})

//And I mouseover on first row of results table of admin tab
When('I mouseover on first row of results table of admin tab', () => {
  homeOrangehrmPage.mouseOverAdminResultTableR1C2()
})

//And I mouseleave on first row of results table of admin tab
When('I mouseleave on first row of results table of admin tab', () => {
  homeOrangehrmPage.mouseleaveAdminResultTableR1C2()
})

When('I mouseover on second row of results table of admin tab', () => {
  homeOrangehrmPage.mouseOverAdminResultTableR2C2()
})

When('I perform move actions on dashboard graph', () => {
  homeOrangehrmPage.mousActionsonDashboardGraph()
})

//Then text insights displayed below dashboard successfully
Then('text insights displayed below dashboard successfully', () => {
  homeOrangehrmPage.textInsightsBelowGraph()
})
When('I see the page in iphone6 version', () => {
  homeOrangehrmPage.viewPortIphone6()
})

When('I see the page in iphonexr version', () => {
  homeOrangehrmPage.viewPortIphonexr()
})

When('I see the page in macbook-15 version', () => {
  homeOrangehrmPage.viewPortmac15()
})

When('I see the page in iPad2 version', () => {
  homeOrangehrmPage.viewPortipad2()
})

//And I select sales manager in the employees list
When('I select sales manager in the employees list', () => {
  homeOrangehrmPage.selectSalesmgrEmployee()
})

//Then sales manager should be selected successfully
Then('sales manager should be selected successfully', () => {
  homeOrangehrmPage.SalesmgrEmployeeAssertion()
})

// And I click on dropdown of jobtitle
When('I click on dropdown of jobtitle', () => {
  homeOrangehrmPage.jobTitleDropdown()
})
// And I select sales manager as dropdown selection
When('I select sales manager as dropdown selection', () => {
  homeOrangehrmPage.jobTitleDropdownSalesMgrSelection()
})

// Then sales manager in dropdown should be selected successfully
Then('sales manager in dropdown should be selected successfully', () => {
  homeOrangehrmPage.SalesmgrDrpDownAssertion()
})

//And I click on search button of pim tab
When('I click on search button of pim tab', () => {
  homeOrangehrmPage.clickSearchbtn()
})

//Then search results should be displayed successfully
Then('search results should be displayed successfully', () => {
  homeOrangehrmPage.resultTableDisplay()
})

//Accessibility Steps:
//And I navigate to jobtitle dropdown using keyboard functionality
When('I navigate to jobtitle dropdown using keyboard functionality', () => {
  homeOrangehrmPage.navJobtitleusingKeyboard()
})
When('I navigate to employee name field using keyboard functionality', () => {
  homeOrangehrmPage.navempNameusingKeyboard()
})
When('I enter the name Peter using keyboard', () => {
  homeOrangehrmPage.enterempNameusingKeyboard()
})


//And I press enter on dropdown of jobtitle to choose sales manager
When('I press enter on dropdown of jobtitle to choose sales manager', () => {
  homeOrangehrmPage.selectjobTitleusingKeyboard()
})
//And I press enter on search button of pim tab
When('I press enter on search button of pim tab', () => {
  homeOrangehrmPage.pressSearchusingKeyboard()
})

When('I use keyboard to navigate to go back to the previous page', () => {
  homeOrangehrmPage.pressAltLeftusingKeyboard()
})

When('I use keyboard to navigate to go to the next page', () => {
  homeOrangehrmPage.pressAltRightusingKeyboard()
})
When('I use keyboard to perform page up', () => {
  homeOrangehrmPage.pressPageUpusingKeyboard()
})
When('I use keyboard to perform page down', () => {
  homeOrangehrmPage.pressPageDownusingKeyboard()
})
When('I use keyboard to perform select all', () => {
  homeOrangehrmPage.pressSelectAllusingKeyboard()
})
When('I use keyboard to perform Move to End', () => {
  homeOrangehrmPage.pressMoveToEndusingKeyboard()
})
When('I use keyboard to perform multiple arrows from left right up down', () => {
  homeOrangehrmPage.pressUpDownRightLeftusingKeyboard()
})

