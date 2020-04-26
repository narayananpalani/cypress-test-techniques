const compareSnapshotCommand = require('cypress-visual-regression/dist/command')
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

Cypress.Commands.add('check_URL_ResponseStatus', (args) => {
  cy.get(args)
        .each(($a) => {
          const href = $a.prop('href')

          cy.request(href)
                .its('body')
                .should('include', '<title>')
                .should('include', '<html>')
          cy.request(href)
            .then(function (resp) {
              expect(resp.status).to.eq(200)
            })
        })
})

compareSnapshotCommand()
addMatchImageSnapshotCommand({
  failureThreshold: 0.00,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.0 },
  capture: 'fullPage',
  timeout: '60000',
})
