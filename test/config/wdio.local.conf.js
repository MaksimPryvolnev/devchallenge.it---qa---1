const {
    before
} = require('../utils/hooks');
const config = JSON.parse(JSON.stringify(require('./wdio.conf').config));

config.baseUrl = 'http://localhost:8080/article/faces/welcome.xhtml';
config.before = before;
config.maxInstances = 1;

exports.config = config;