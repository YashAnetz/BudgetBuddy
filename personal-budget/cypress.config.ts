import { defineConfig } from 'cypress'

export default defineConfig({
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  eyesRemoveDuplicateTests: false,
  universalDebug: false,
  eyesIsGlobalHooksSupported: false,
  eyesPort: 52735,
  isComponent: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://budgetbuddynbad.netlify.app/',
  },
})