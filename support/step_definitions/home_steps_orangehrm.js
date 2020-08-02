(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeOrangehrmPage = void 0;
var admin_tabselector_Homepage = '#menu_admin_viewAdminModule';
var userDetail_Adminpage = "//*[@id='ohrmList_chkSelectAll']";
var pimTab_Homepage = "//*[@id='menu_pim_viewPimModule']";
var selectAll_pimTab = "//*[@id='ohrmList_chkSelectAll']";
var admin_resultTableRow1Column2 = "//*[@id='resultTable']/tbody/tr[1]/td[2]";
var admin_resultTableRow2Column2 = "//*[@id='resultTable']/tbody/tr[2]/td[2]";
var graph_dashboard = "//*[@id='div_graph_display_emp_distribution']";
var sectionBelowGraph = "//*[@id='hover_div_graph_display_emp_distribution']";
var pieChartLabel1 = "//*[@id='pieLabel1']/div";
var pieChartLabel2 = "//*[@id='pieLabel2']/div";
var pieChartLabel3 = "//*[@id='pieLabel3']/div";
var pieChartLabel4 = "//*[@id='pieLabel4']/div";
var admin_tabxPath_Homepage = "//*[@id='menu_admin_viewAdminModule']";
var salesMgr_PIM = "//*[@id='ohrmList_chkSelectRecord_6']";
var jobTitleDropdown_pim = "//*[@id='empsearch_job_title']";
var searchBtn_pim = "//*[@id='searchBtn']";
var searchResults = "//*[@id='resultTable']";
var supervisorPIMtab = "//*[@id='empsearch_supervisor_name']";
var homeOrangehrmPage = {
  checkAdminTab: function checkAdminTab() {
    cy.xpath(admin_tabxPath_Homepage).invoke('show').should('be.visible');
  },
  checkAdminTabCssMethod: function checkAdminTabCssMethod() {
    cy.get(admin_tabselector_Homepage).invoke('show').should('be.visible');
  },
  checkAdminTabTextMethod: function checkAdminTabTextMethod() {
    cy.contains("Admin").invoke('show').should('be.visible');
  },
  clickAdminTab: function clickAdminTab() {
    cy.xpath(admin_tabxPath_Homepage).invoke('show').should('be.visible').click();
  },
  clickAdminResultTableR1C2: function clickAdminResultTableR1C2() {
    cy.xpath(admin_resultTableRow1Column2).invoke('show').should('be.visible').click();
  },
  dblclickAdminTab: function dblclickAdminTab() {
    cy.xpath(admin_tabxPath_Homepage).invoke('show').should('be.visible').dblclick();
  },
  checkAdminTabSubsection: function checkAdminTabSubsection() {
    cy.xpath(userDetail_Adminpage).invoke('show').should('be.visible');
  },
  rhtclickAdminTab: function rhtclickAdminTab() {
    cy.xpath(admin_tabxPath_Homepage).rightclick();
  },
  clickPIMTab: function clickPIMTab() {
    cy.xpath(pimTab_Homepage).invoke('show').should('be.visible').click();
  },
  checkEmployees: function checkEmployees() {
    cy.xpath(selectAll_pimTab).not('[disabled]').check();
  },
  allEmployeesSelected: function allEmployeesSelected() {
    cy.xpath(selectAll_pimTab).not('[disabled]').should('be.checked');
  },
  uncheckEmployees: function uncheckEmployees() {
    cy.xpath(selectAll_pimTab).not('[disabled]').should('be.checked').uncheck();
  },
  selectSalesmgrEmployee: function selectSalesmgrEmployee() {
    cy.xpath(salesMgr_PIM).not('[disabled]').check();
  },
  SalesmgrEmployeeAssertion: function SalesmgrEmployeeAssertion() {
    cy.xpath(salesMgr_PIM).not('[disabled]').should('be.checked');
  },
  noEmployeesSelected: function noEmployeesSelected() {
    cy.xpath(selectAll_pimTab).not('[disabled]').should('not.be.checked');
  },
  jobTitleDropdown: function jobTitleDropdown() {
    cy.get('select').xpath(jobTitleDropdown_pim).select('Sales Manager').should('have.value', '1');
  },
  clickSearchbtn: function clickSearchbtn() {
    cy.xpath(searchBtn_pim).click();
  },
  resultTableDisplay: function resultTableDisplay() {
    cy.xpath(searchResults).invoke('show').should('be.visible');
  },
  mousedownAdminTab: function mousedownAdminTab() {
    cy.xpath(admin_tabxPath_Homepage).invoke('show').should('be.visible').trigger('mousedown');
  },
  touchAdminTab: function touchAdminTab() {
    cy.xpath(admin_tabxPath_Homepage).invoke('show').should('be.visible').trigger('touchstart');
  },
  mouseoverAdminTab: function mouseoverAdminTab() {
    cy.xpath(admin_tabxPath_Homepage).invoke('show').should('be.visible').trigger('mouseover');
  },
  mouseOverAdminResultTableR1C2: function mouseOverAdminResultTableR1C2() {
    cy.xpath(admin_resultTableRow1Column2).invoke('show').should('be.visible').trigger('mouseover');
  },
  mouseleaveAdminResultTableR1C2: function mouseleaveAdminResultTableR1C2() {
    cy.xpath(admin_resultTableRow1Column2).invoke('show').should('be.visible').trigger('mouseleave');
  },
  mouseOverAdminResultTableR2C2: function mouseOverAdminResultTableR2C2() {
    cy.xpath(admin_resultTableRow2Column2).invoke('show').should('be.visible').trigger('mouseover');
  },
  mousActionsonDashboardGraph: function mousActionsonDashboardGraph() {
    cy.xpath(graph_dashboard).as('graph').trigger('mousedown').trigger('mousemove').trigger('mouseup').trigger('mouseleft', {
      which: 1,
      pageX: 600,
      pageY: 100
    }).trigger('mouseright', {
      which: 1,
      pageX: 600,
      pageY: 600
    }).trigger('mouseleave');
  },
  textInsightsBelowGraph: function textInsightsBelowGraph() {
    cy.xpath(sectionBelowGraph).invoke('show').should('be.visible');
  },
  viewPortIphone6: function viewPortIphone6() {
    cy.viewport('iphone-6');
  },
  viewPortIphonexr: function viewPortIphonexr() {
    cy.viewport('iphone-xr');
  },
  viewPortmac15: function viewPortmac15() {
    cy.viewport('macbook-15');
  },
  viewPortipad2: function viewPortipad2() {
    cy.viewport('ipad-2');
  },
  //accessibility related methods:
  navJobtitleusingKeyboard: function navJobtitleusingKeyboard() {
    cy.xpath(supervisorPIMtab).click().tab().focused(jobTitleDropdown_pim);
  },
  selectjobTitleusingKeyboard: function selectjobTitleusingKeyboard() {
    cy.focused(jobTitleDropdown_pim).type('{downarrow}sales{downarrow}{enter}');
  },
  pressSearchusingKeyboard: function pressSearchusingKeyboard() {
    cy.xpath(searchBtn_pim).type('{enter}');
  }
};
exports.homeOrangehrmPage = homeOrangehrmPage;

},{}],2:[function(require,module,exports){
"use strict";

var _HomeOrangehrm_PageObjects = require("../../pageobjects/HomeOrangehrm_PageObjects");

//step definition for the feature file's line: And the Admin tab should be displayed
Then('the Admin tab should be displayed', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.checkAdminTab(); //homeOrangehrmPage.checkAdminTabCssMethod();
  //homeOrangehrmPage.checkAdminTabTextMethod();

}); //And I click on admin tab of home page

When('I click on admin tab of home page', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.clickAdminTab();
}); //And I double click on admin tab of home page

When('I double click on admin tab of home page', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.dblclickAdminTab();
}); //Then the admin sub tab section displayed

Then('the admin sub tab section displayed', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.checkAdminTabSubsection();
}); //And I right click on admin tab of home page

When('I right click on admin tab of home page', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.rhtclickAdminTab();
}); //And I click on PIM tab of home page

When('I click on PIM tab of home page', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.clickPIMTab();
}); //And I select all employees in the employees list

When('I select all employees in the employees list', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.checkEmployees();
}); //Then all employees should be selected successfully

Then('all employees should be selected successfully', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.allEmployeesSelected();
}); //And I uncheck all employees in the employees list

When('I uncheck all employees in the employees list', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.uncheckEmployees();
}); //Then no employees should be selected successfully

Then('no employees should be selected successfully', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.noEmployeesSelected();
}); //And I move mouse down on admin tab section

When('I move mouse down on admin tab section', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.mousedownAdminTab();
});
When('I move touchstart using mouse on admin tab section', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.touchAdminTab();
}); //And I move mouseover using mouse on admin tab section

When('I move mouseover using mouse on admin tab section', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.mouseoverAdminTab();
}); //And I click on first row of results table of admin tab

When('I click on first row of results table of admin tab', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.clickAdminResultTableR1C2();
}); //And I mouseover on first row of results table of admin tab

When('I mouseover on first row of results table of admin tab', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.mouseOverAdminResultTableR1C2();
}); //And I mouseleave on first row of results table of admin tab

When('I mouseleave on first row of results table of admin tab', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.mouseleaveAdminResultTableR1C2();
});
When('I mouseover on second row of results table of admin tab', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.mouseOverAdminResultTableR2C2();
});
When('I perform move actions on dashboard graph', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.mousActionsonDashboardGraph();
}); //Then text insights displayed below dashboard successfully

Then('text insights displayed below dashboard successfully', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.textInsightsBelowGraph();
});
When('I see the page in iphone6 version', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.viewPortIphone6();
});
When('I see the page in iphonexr version', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.viewPortIphonexr();
});
When('I see the page in macbook-15 version', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.viewPortmac15();
});
When('I see the page in iPad2 version', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.viewPortipad2();
}); //And I select sales manager in the employees list

When('I select sales manager in the employees list', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.selectSalesmgrEmployee();
}); //Then sales manager should be selected successfully

Then('sales manager should be selected successfully', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.SalesmgrEmployeeAssertion();
}); // And I click on dropdown of jobtitle

When('I click on dropdown of jobtitle', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.jobTitleDropdown();
}); // And I select sales manager as dropdown selection

When('I select sales manager as dropdown selection', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.jobTitleDropdownSalesMgrSelection();
}); // Then sales manager in dropdown should be selected successfully

Then('sales manager in dropdown should be selected successfully', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.SalesmgrDrpDownAssertion();
}); //And I click on search button of pim tab

When('I click on search button of pim tab', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.clickSearchbtn();
}); //Then search results should be displayed successfully

Then('search results should be displayed successfully', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.resultTableDisplay();
}); //Accessibility Steps:
//And I navigate to jobtitle dropdown using keyboard functionality

When('I navigate to jobtitle dropdown using keyboard functionality', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.navJobtitleusingKeyboard();
}); //And I press enter on dropdown of jobtitle to choose sales manager

When('I press enter on dropdown of jobtitle to choose sales manager', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.selectjobTitleusingKeyboard();
}); //And I press enter on search button of pim tab

When('I press enter on search button of pim tab', function () {
  _HomeOrangehrm_PageObjects.homeOrangehrmPage.pressSearchusingKeyboard();
});

},{"../../pageobjects/HomeOrangehrm_PageObjects":1}]},{},[2]);
