Error.stackTraceLimit = Infinity;

// This is needed to keep karma happy, otherwise it returns the following error:
//   ReferenceError: google is not defined
window.google = { charts: { load: function(){ return true;} } };

require('core-js/es6');
require('reflect-metadata');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');
require('zone.js/dist/proxy');
require('zone.js/dist/jasmine-patch');
require('rosie');
require('core-js/es7');

require('../spec/spec-helper.ts');

var appContext = require.context('../spec', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule,
																		browser.platformBrowserDynamicTesting());
