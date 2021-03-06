const fetch = require('node-fetch');
const base64 = require('base-64');

const fetchFromAEM = async config => {
    const errorMessage = config.errorMessage || 'Error Fetching from AEM';
    const url = config.url.indexOf('http://localhost:4502') !== -1 ? config.url : `http://localhost:4502${config.url}`
    return await fetch(
        url,
        {
            method: config.method,
            headers: {
                'Authorization': 'Basic ' + base64.encode(`admin:admin`)
            },
            body: config.body || null,
        },
    );
};

module.exports = fetchFromAEM;
