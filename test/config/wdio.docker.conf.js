const {
    before
} = require('../utils/hooks');
const config = JSON.parse(JSON.stringify(require('./wdio.conf').config));

config.baseUrl = 'http://172.21.0.1:8080';
config.before = before;
config.maxInstances = 1;
config.runner = 'local';
config.host = '172.17.0.1';
config.port = 4444;
config.path = '/wd/hub';
delete config.services;

exports.config = config;