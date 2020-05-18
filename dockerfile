# Repo for Cypress Browsers Images:
# https://github.com/cypress-io/cypress-docker-images/tree/master/browsers
 
#---------------------------Config One---------------------------
 
# Chrome 80 & Firefox 72
 
# pull image
FROM cypress/browsers:node13.6.0-chrome80-ff72
# make directory inside container
RUN mkdir /cyTests
WORKDIR /cyTests
# copy cypress code from host to container
COPY . /cyTests
# execute the tests
RUN npm install
RUN npm link
RUN npm link cypress-cucumber-preprocessor
RUN npm install through
RUN npm run test:mochawesomereport
#RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run --browser firefox
RUN $(npm bin)/cypress run --browser chrome
 
 
#----------------------------Config Two--------------------------
 
# Chrome 79 & Firefox 71
FROM cypress/browsers:node12.14.0-chrome79-ff71
RUN mkdir /cyTests
WORKDIR /cyTests
COPY . /cyTests
RUN npm install
RUN npm link
RUN npm link cypress-cucumber-preprocessor
RUN npm install through
RUN npm run test:mochawesomereport
#RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run --browser firefox
RUN $(npm bin)/cypress run --browser chrome