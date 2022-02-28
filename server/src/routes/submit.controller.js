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
            'Authorization': `Bearer ${user.token}`
        },
        data: userData
    });

    if (response.status !== 200) {
        console.error('Error: ', response.data);
        return res
            .status(response.status)
            .json({ error: response.title });
    }
    
    // console.log(response.data.confirmationText)

    return res.status(200).json({ ok: true });
}

module.exports = {
    httpScheduleInterview
}