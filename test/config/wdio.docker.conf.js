const {
    before
} = require('../utils/hooks');
const config = JSON.parse(JSON.stringify(require('./wdio.conf').config));

config.baseUrl = 'http://172.18.0.3:8080/article/faces/welcome.xhtml';
config.before = before;
config.maxInstances = 1;
config.runner = 'local';
config.host = '172.18.0.2';
config.port = 4444;
config.path = '/wd/hub';
delete config.services;

exports.config = config;