// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: './',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'vendor/assets/components/angular/angular.js',
      'vendor/assets/components/angular-mocks/angular-mocks.js',
      'vendor/assets/components/angular-resource/angular-resource.js',
      'vendor/assets/components/angular-cookies/angular-cookies.js',
      'vendor/assets/components/angular-sanitize/angular-sanitize.js',
      'vendor/assets/components/angular-route/angular-route.js',
      'vendor/assets/components/jquery/jquery.min.js',

      'app/assets/javascripts/**/*.js',
      'spec/javascripts/**/*-spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
