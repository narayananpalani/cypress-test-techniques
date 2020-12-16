const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "cucumber-report/cucumber-json",
  reportPath: "cucumber-report",
  openReportInBrowser: true,
  staticFilePath: true,
  saveCollectedJSON: true,
  disableLog: false,
  pageTitle: "cypress-test-techniques",
  reportName: "cucumber report",
  pageFooter: "<I> cypress-test-techniques </I>",
  displayDuration: true,
  durationInMS: true,
  hideMetadata: false,
  displayReportTime: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "cypress-test-techniques" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});
