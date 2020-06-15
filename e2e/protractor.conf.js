<<<<<<< HEAD
=======
// @ts-check
>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

<<<<<<< HEAD
=======
/**
 * @type { import("protractor").Config }
 */
>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
<<<<<<< HEAD
    'browserName': 'chrome'
=======
    browserName: 'chrome'
>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
<<<<<<< HEAD
      project: require('path').join(__dirname, './tsconfig.e2e.json')
=======
      project: require('path').join(__dirname, './tsconfig.json')
>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};