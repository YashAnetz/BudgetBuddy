import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'buzn3b',
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  eyesRemoveDuplicateTests: false,
  universalDebug: false,
  appliConfFile: {
    batch: {
      id: '21b55662-fa7b-4e7b-879c-efe48d75e58a',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 52735,
  isComponent: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:4200/',
  },
})