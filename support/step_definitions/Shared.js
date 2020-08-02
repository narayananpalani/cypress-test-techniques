(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// capture snapshot
then('I capture snapshot and compare {string}', function (string) {
  cy.matchImageSnapshot(string);
});
/*
 assertions
*/

then("I should see title {string}", function (title) {
  cy.title().should('include', title);
});
then("I should see {string} text displayed", function (string) {
  cy.contains(string).invoke('show').should('be.visible');
});
then('The header should contain {string}', function (string) {
  cy.get('h1').should('contain', string);
});
then('The sub-header should contain {string}', function (string) {
  cy.get('h2').should('contain', string);
});
then('The header title should contain {string}', function (string) {
  cy.get('.header__title').invoke('text').then(function (text) {
    expect(text).to.include(string);
  });
});
then("I should not see {string}", function (string) {
  cy.contains(string, {
    timeout: 0
  }).should('not.be.visible');
});
then("I should not see text {string}", function (string) {
  cy.xpath('//*[contains(text(),"' + string + '")]').should('not.be.visible');
});
then('The current url should contain {string}', function (string) {
  cy.url().should('contain', string);
});
/**
 * click action
 */

when('I click on {string}', function (string) {
  cy.xpath("//*[contains(text(),'" + string + "')]").first().click();
});
then('I press button {string}', function (string) {
  cy.contains(string).click();
  cy.wait(1000);
}); // url navigation

then('I go to {string}', function (string) {
  cy.visit(string);
});
then('I navigate to {string}', function (string) {
  cy.visit(string);
});
then('I reload page {string}', function (string) {
  cy.reload();
});
then('I go back {string}', function (string) {
  cy.go('back');
});
then('I go forward {string}', function (string) {
  cy.go('forward');
});
then('I go back to homepage', function () {
  cy.go('back');
}); // window handling

then('I wait for appReady state', function () {
  cy.window().should('have.property', 'appReady', true);
}); // wait cmmds

then('I wait for {string} secs', function (string) {
  cy.wait(string * 1000);
});
then('I wait for few secs', function () {
  cy.wait(2000);
}); // logs

then('I log {string}', function (string) {
  cy.log(string);
  console.log(string);
}); // check URL response status - 200

then('I check all URL response status should be 200', function () {
  cy.checkURLResponseStatus();
});

},{}]},{},[1]);
