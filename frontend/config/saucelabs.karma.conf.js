var webpackConfig = require('./webpack.test');

var browsers = {
  sl_chrome: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest'
  },
  sl_firefox: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 10',
    version: 'latest'
  },
  sl_ios_safari: {
    base: 'SauceLabs',
    deviceName: 'iPhone Simulator',
    browserName: 'Safari',
    platform: 'iOS',
    version: 'latest'
  },
  al_android_chrome: {
    base: 'SauceLabs',
    deviceName: 'Android Emulator',
    browserName: 'Android'
  },
  sl_ie_10: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 8',
    version: '10'
  },
  sl_ie_11: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 8.1',
    version: '11'
  }
};

module.exports = function (config) {
  var _config = {
    basePath: '',
    browserNoActivityTimeout: 100000,
    browserDisconnectTimeout : 10000,
    browserDisconnectTolerance : 4,
    captureTimeout : 4*60*1000,
    frameworks: ['jasmine'],
    files: [
      { pattern: 'karma-test-shim.js', watched: false }
    ],
    preprocessors: {
      'karma-test-shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: false
    },
    reporters: ['dots', 'saucelabs'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers: Object.keys(browsers),
    captureTimeout: 120000,
    customLaunchers: browsers,
    sauceLabs: {
      startConnect: false,
      options: {
        'tunnel-identifier': process.env.TUNNEL_IDENTIFIER
      }
    },
    singleRun: true
  };
  config.set(_config);
};
