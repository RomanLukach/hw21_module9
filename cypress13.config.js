const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8ugef5",
  video: false,
  env: {
    viewportWidth: 1280,
    viewportHeight: 800
  },
  e2e: {
    baseUrl: 'https://santa-secret.ru/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
