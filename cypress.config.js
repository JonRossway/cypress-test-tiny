const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1400,
  viewportHeight: 1080,
  watchForFileChanges: false,
  defaultCommandTimeout: 18000,
  numTestsKeptInMemory: 1,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  downloadsFolder: "cypress/fixtures/downloads",
  videosFolder: "cypress/reports/videos",
  screenshotsFolder: "cypress/reports/screenshots",
  reporter: "cypress-multi-reporters",

  reporterOptions: {
    configFile: "reporter-config.json",
  },

  retries: {
    runMode: 3,
    openMode: 0,
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // setupNodeEvents(on, config) {
    //     return require("./cypress/plugins/index.js")(on, config);
    // },
    baseUrl: "http://localhost:9080",
    excludeSpecPattern: "*constants.cy.js",
  },

  component: {
    excludeSpecPattern: "*constants.cy.js",
    specPattern: "**/*component.spec.{js,jsx}",
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
