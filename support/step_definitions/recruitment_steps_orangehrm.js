(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recOrangehrmPage = void 0;
var recruitmentTab_Homepage = "//*[@id='menu_recruitment_viewRecruitmentModule']";
var addBtn_RecrTab = "//*[@id='btnAdd']";
var uploadBtn_RecrTab = "//*[@id='addCandidate_resume']";
var recOrangehrmPage = {
  clickRecTab: function clickRecTab() {
    cy.xpath(recruitmentTab_Homepage).invoke('show').should('be.visible').click();
  },
  clickAddRec: function clickAddRec() {
    cy.xpath(addBtn_RecrTab).invoke('show').should('be.visible').click();
  },
  uploadResume: function uploadResume() {
    var fileName = 'Resume.txt';
    cy.readFile('.//cypress//fixtures//Resume.txt').then(function (fileContent) {
      cy.xpath(uploadBtn_RecrTab).attachFile({
        fileContent: fileContent,
        fileName: fileName,
        mimeType: 'application/txt'
      });
      cy.xpath(uploadBtn_RecrTab).click();
    });
  }
};
exports.recOrangehrmPage = recOrangehrmPage;

},{}],2:[function(require,module,exports){
"use strict";

var _RecruitmentOrangehrm_PageObjects = require("../../pageobjects/RecruitmentOrangehrm_PageObjects");

When('I click on Recruitment tab of home page', function () {
  _RecruitmentOrangehrm_PageObjects.recOrangehrmPage.clickRecTab();
});
When('I click on Add button to add resume', function () {
  _RecruitmentOrangehrm_PageObjects.recOrangehrmPage.clickAddRec();
});
Then('I uploaded the resume successfully', function () {
  _RecruitmentOrangehrm_PageObjects.recOrangehrmPage.uploadResume();
});

},{"../../pageobjects/RecruitmentOrangehrm_PageObjects":1}]},{},[2]);
