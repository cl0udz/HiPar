exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'firefox',
    chromeOptions: {
      binary: '/opt/google/chrome/google-chrome',
      args: [],
      extensions: [],
    },
  },

  baseUrl: 'http://localhost:7777/console',

  framework: 'mocha',
  mochaOpts: {
    timeout: 30000
  }

  // framework: 'jasmine',
  // jasmineNodeOpts: {
  //   defaultTimeoutInterval: 30000
  // },

};