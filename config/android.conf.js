const { config } = require('./wdio.conf.js');

config.services.push( ["appium"]);
config.port = 4723;

exports.config = {
    ...config,
    ...{
        capabilities: [{
            maxInstances: 1,
            platformName: 'Android',
            'appium:deviceName': 'Nexus_6P',
            'appium:platformVersion': '11.0',
            'appium:automationName': 'UiAutomator2',
            'appium:orientation': 'PORTRAIT',
            'appium:app': 'files/Android-NativeDemoApp-0.4.0.apk',
            'appium:appWaitActivity': '*.MainActivity'
        }],
        specs: [
            '../features/android.exercises.feature'
        ],
        cucumberOpts: {
            // <string[]> (file/dir) require files before executing features
            require: ['steps/android.steps.js'],
            // <boolean> show full backtrace for errors
            backtrace: false,
            // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
            requireModule: [],
            // <boolean> invoke formatters without executing steps
            dryRun: false,
            // <boolean> abort the run on first failure
            failFast: false,
            // <boolean> hide step definition snippets for pending steps
            snippets: true,
            // <boolean> hide source uris
            source: true,
            // <boolean> fail if there are any undefined or pending steps
            strict: false,
            // <string> (expression) only execute the features or scenarios with tags matching the expression
            tagExpression: '',
            // <number> timeout for step definitions
            timeout: 60000,
            // <boolean> Enable this config to treat undefined definitions as warnings.
            ignoreUndefinedDefinitions: false
        }
    }
}
