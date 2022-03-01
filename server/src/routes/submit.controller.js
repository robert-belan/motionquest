const axios = require('axios');

const { getUserById } = require('../models/sessions.model');

require('dotenv').config();

const { BASE_URL, ENDPOINTTEST} = process.env;


async function httpScheduleInterview(req, res) {
    
    const userData = req.body;

    // simulation - get logged in user's "session" token from session db
    const user = getUserById('testId');

    const response = await axios({
        method: 'post',
        url: `${BASE_URL}${ENDPOINTTEST}`,
        headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${user.token}`,
        data: userData
        }
    }).catch( (error) => error.toJSON()); // Axios error handling


    if (response.status !== 200) {
        console.log(`
            Getting token failed...
            Message: ${response.message}
        `, response);
        return res.json({ ok: false })
    }

    return res.status(200).json({ ok: true });
}

module.exports = {
    httpScheduleInterview
}