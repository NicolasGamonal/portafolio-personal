module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    
    // Forzamos la carga de los plugins de testing locales
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher')
    ],

    files: [
      'src/components/portafolio.spec.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  });
};
