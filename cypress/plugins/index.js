// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const cucumber = require("cypress-cucumber-preprocessor").default;
const getCompareSnapshotsPlugin = require("cypress-visual-regression/dist/plugin");
const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");
const path = require("path");

function getCongByFile(file) {
  const pathToCongFile = path.resolve("cypress/", "config", `${file}.json`);
  return fs.readJson(pathToCongFile);
}

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
  getCompareSnapshotsPlugin(on);
  addMatchImageSnapshotPlugin(on, config);

  //const file = config.env.configFile;
  //return getCongByFile(file);
};
