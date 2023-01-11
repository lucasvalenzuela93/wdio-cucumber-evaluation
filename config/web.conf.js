const { config } = require('./wdio.conf');

config.hostname = 'localhost';
config.path = '/';
config.services.push(['chromedriver']);

exports.config = {
    ...config,
    ...{
        capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true
        }],
        specs: [
            '../features/web.exercises.feature'
        ],
    }
}
