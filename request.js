const http = require('http');
const https = require('https');

/**
 * getJSON:  RESTful GET request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */

const options = {
    host: 'http://172.21.0.1:8080',
    port: 8080,
    path: '/article/faces/welcome.xhtml'
};

console.log('rest::getJSON');
const port = options.port == 443 ? https : http;

let output = '';

const req = port.request(options, (res) => {
    console.log(`${options.host} : ${res.statusCode}`);
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        output += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(output));

        onResult(res.statusCode, obj);
    });
});

req.on('error', (err) => {
    // res.send('error: ' + err.message);
});

req.end();