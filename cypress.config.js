const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8ugef",
  video: false,
  e2e: {
    baseUrl: 'https://santa-secret.ru/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
