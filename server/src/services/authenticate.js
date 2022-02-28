const axios = require('axios');

const { saveSession } = require('../models/sessions.model');

require('dotenv').config();

const { BASE_URL, ENDPOINTINFO } = process.env;

async function authenticateUser(key) {
    
    const response = await axios.get(`${BASE_URL}${ENDPOINTINFO}`, {
        params: {
            apiKey: key
        }
    });

    if (response.status !== 200) {
        console.log('Getting token failed...');
        console.log(`Error: ${response.status} ${response.statusText}`);
        return false;
    }

    const token = response.data.authorization.access_token;

    // simulates saving access token to some session database
    if (token) {
        const user = { // hard-coded testing user session
            userId: 'testId',
            userName: 'testUser',
            token
        };
        saveSession(user);
        return true;
    }
}

module.exports = {
    authenticateUser,
}