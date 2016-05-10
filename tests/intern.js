define({
  capabilities: {
    'browserstack.selenium_version': '2.45.0'
  },
  environments: [
    { browserName: 'chrome', version: '50', platform: [ 'WINDOWS', 'MAC' ] }
  ],
  maxConcurrency: 2,
  tunnel: 'BrowserStackTunnel',
  loaderOptions: {
    packages: [ { name: 'myPackage', location: '.' } ]
  },
  suites: [ /* 'myPackage/tests/foo', 'myPackage/tests/bar' */ ],
  functionalSuites: [ 'tests/functional/main' ],
  excludeInstrumentation: /^(?:tests|node_modules)\//
});
