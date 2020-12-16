const compareSnapshotCommand = require("cypress-visual-regression/dist/command");
import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";
import "cypress-file-upload";

Cypress.Commands.add("check_URL_ResponseStatus", (args) => {
  cy.get(args).each(($a) => {
    const href = $a.prop("href");

    cy.request(href)
      .its("body")
      .should("include", "<title>")
      .should("include", "<html>");
    cy.request(href).then(function (resp) {
      expect(resp.status).to.eq(200);
    });
  });
});

compareSnapshotCommand();
addMatchImageSnapshotCommand({
  failureThreshold: 0.0,
  failureThresholdType: "percent",
  customDiffConfig: { threshold: 0.0 },
  capture: "fullPage",
  timeout: "60000",
});

function terminalLog(violations) {
  cy.task(
    "log",
    `${violations.length} accessibility violation${
      violations.length === 1 ? "" : "s"
    } ${violations.length === 1 ? "was" : "were"} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  );

  cy.task("table", violationData);
}
