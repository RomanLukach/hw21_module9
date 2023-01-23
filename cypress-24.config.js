const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "junumb",
  video: false,
  env: {
    viewportWidth: 1920,
    viewportHeight: 1080
  },
  e2e: {
    baseUrl: 'https://santa-secret.ru/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
