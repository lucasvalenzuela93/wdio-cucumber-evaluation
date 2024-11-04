const { config } = require('./wdio.conf');

config.hostname = 'localhost';
config.path = '/';
config.services.push(['chromedriver']);
config.capabilities = [
    {
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }
];
config.specs = [
    '../features/web.exercises.feature'
];

exports.config = config;
