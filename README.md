# Cypress-Test-Techniques for functional,visual regression,accessibility and compatibility tests with Cucumber BDD and AWS Amplify Console - CI/CD Pipeline
Complete videos,exercises,quiz and assignments: www.udemy.com/course/cypressio

# Credits to:
Samuel Anthony Custer for cypress-axe,
Vinayak Titti for cypress-boilerplate,
abramenal for cypress-file-upload,
Ben Kucera for cypress-plugin-tab,
Gleb Bahmutov for cypress-xpath,
Michael Herman for cypress-visual-regression,
Jack Cross for cypress-image-snapshot,
Lukasz Gandecki for cypress-cucumber-preprocessor.

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






