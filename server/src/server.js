const fs = require('fs');
const path = require('path');
const https = require('https');

const app = require('./app');

require('dotenv').config(); // access to env vars defined in .env

const PORT = process.env.PORT || 8000;


https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app)
    .listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}...`);
    });