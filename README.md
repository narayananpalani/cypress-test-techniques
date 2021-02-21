# AUTOMATED SOFTWARE TESTING WITH CYPRESS
:octocat: An open-source, fully built Cypress Framework in page object model with visual regression, lighthouse code audit, accessibility tests, mobile view port compatibility tests, browserstack, jenkins,docker configuration :evergreen_tree:

# Video Guide
[![CypressIOFramework](https://github.com/cypress-test-techniques/lessons/blob/master/lessons/CypressIOtestframework.gif?raw=true)](https://engineers-hub.teachable.com/p/cypressio)
:rocket: Global reach of CypressIO sessions through [Teachable](https://engineers-hub.teachable.com/). 
[![video showing international reach of udemy courses](https://github.com/narayananpalani/narayananpalani/blob/master/images/globalreach.gif?raw=true)](https://engineers-hub.teachable.com/)

# Book
[![CypressIOBook](https://github.com/cypress-test-techniques/lessons/blob/master/lessons/9780367699543.jpg?raw=true)](https://www.routledge.com/Automated-Software-Testing-with-Cypress/Palani/p/book/9780367699543)

## CypressIO CheatSheet
[Latest CypressIO CheatSheet](https://cheatography.com/narayanan-palani/cheat-sheets/cypressio/)

## CypressIO Basics as Slides
[CypressIO Basics](https://github.com/cypress-test-techniques/lessons/blob/master/lessons/cypress101.pdf?raw=true)
[CypressIO Architecture](https://github.com/cypress-test-techniques/lessons/blob/master/lessons/cypressArchitecture.pdf?raw=true)
[CypressIO Docker](https://github.com/cypress-test-techniques/lessons/blob/master/lessons/cypressDocker.pdf?raw=true)


## Pre-requisite Tools
1. Node version 12 or above
2. Visual Studio Code or IntelliJ or WebstormIDE or any valid IDE

## Quickstart
It takes just 5 minutes to setup cypress framework 🚀
1. npm install
2. npm link
3. npm link cypress-cucumber-preprocessor
4. npm install through

## set host/ baseurl
1. go to cypress.json file
2. set baseurl

## Dashboard execution
1. Go to project root, 
2. npx cypress open
3. click specific feature file [executionwillstart]

## cmmd line Execution
1. npm run test:mochawesomereport
2. npm run test:allurereport
3. npm run generatereport

## Visual Test
1. npm run test:visual-base
2. npm run test:visual-actual
3. Snapshots will be generated in 'snapshots' folder

## Reports
1. Reports will be generated in 'mochawesomereport-report' folder - command line execution only
  
   ex: npm run test:mochawesomereport

2. Allure reports: 
    a. npm run test:allurereport
    b. npm run generatereport

## BrowserStack Integration Steps
1. Installation in repository: npm install -g browserstack-cypress-cli
2. Create Json file of browserstack through: browserstack-cypress init
3. Update the browserstack.json using standard configurations. (Example:https://www.browserstack.com/docs/automate/cypress)   
4. Run the tests in browserstack: browserstack-cypress run 



## Credits
1. Samuel Anthony Custer for cypress-axe,
2. Vinayak Titti for cypress-boilerplate,
3. abramenal for cypress-file-upload,
4. Ben Kucera for cypress-plugin-tab,
5. Gleb Bahmutov for cypress-xpath,
6. Michael Herman for cypress-visual-regression,
7. Jack Cross for cypress-image-snapshot,
8. Lukasz Gandecki for cypress-cucumber-preprocessor.

## Watch Latest Meetup Session
[Latest CypressIO Meetup](https://www.youtube.com/watch?v=b8y8hTTeXTw&t=2s)

:tada: Learn ISTQB Test Automation Engineering along with CypressIO:
[![ISTQB Advanced Test Automation Engineering Training](https://github.com/narayananpalani/narayananpalani/blob/master/images/ISTQBAdvancedTestAutomationEngineering.png?raw=true)](https://engineers-hub.teachable.com/p/istqb-advanced-level-test-automation-engineer-professional-training-with-q-a)

⚡Don't forget to click on 'Watch' and 'Star' on top right hand side of github repository to get latest updates and features
