const { defineConfig } = require('cypress');
const synpressPlugins = require('@synthetixio/synpress/plugins');
 
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://redduck-flow-poc.netlify.app/',
    specPattern: 'tests/e2e/specs',
    supportFile: 'tests/support/index.js',
    videosFolder: 'tests/e2e/videos',
    screenshotsFolder: 'tests/e2e/screenshots',
    video: true,
    videoCompression: 15,
    screenshotOnRunFailure: true,
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'tests/results',
      overwrite: false,
      html: false,
      json: true,
    },
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
      return config
    },
  },
});
