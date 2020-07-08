# Cypress-Test-Techniques for functional,visual regression,accessibility and compatibility tests with Cucumber BDD and AWS Amplify Console - CI/CD Pipeline
Complete videos,exercises,quiz and assignments: www.udemy.com/course/cypressio

# Credits to:
1. Samuel Anthony Custer for cypress-axe,
2. Vinayak Titti for cypress-boilerplate,
3. abramenal for cypress-file-upload,
4. Ben Kucera for cypress-plugin-tab,
5. Gleb Bahmutov for cypress-xpath,
6. Michael Herman for cypress-visual-regression,
7. Jack Cross for cypress-image-snapshot,
8. Lukasz Gandecki for cypress-cucumber-preprocessor.

# Dependencies:
1. npm install
2. npm link
3. npm link cypress-cucumber-preprocessor
4. npm install through

# set host/ baseurl
1. go to cypress.json file
2. set baseurl

# Dashboard execution:
1. Go to project root, 
2. npx cypress open
3. click specific feature file [executionwillstart]

# cmmd line Execution:
1. npm run test:mochawesomereport
2. npm run test:allurereport
3. npm run generatereport

# Visual Test
1. npm run test:visual-base
2. npm run test:visual-actual
3. Snapshots will be generated in 'snapshots' folder

# Reports:
1. Reports will be generated in 'mochawesomereport-report' folder - command line execution only
  
   ex: npm run test:mochawesomereport

2. Allure reports: 
    a. npm run test:allurereport
    b. npm run generatereport

# BrowserStack Integration Steps
1. Installation in repository: npm install -g browserstack-cypress-cli
2. Create Json file of browserstack through: browserstack-cypress init
3. Update the browserstack.json using standard configurations. (Example:https://www.browserstack.com/docs/automate/cypress)   
4. Run the tests in browserstack: browserstack-cypress run 






