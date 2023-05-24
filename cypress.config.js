const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9bev3x',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
