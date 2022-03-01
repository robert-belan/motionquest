const { authenticateUser } = require('../services/authenticate');

async function httpGetApiKey (req, res) {
    const apiKey = req.body.apiKey;
    const isAuthorized = await authenticateUser(apiKey); //! debug comment

    return res.status(200).json({
        authorized: isAuthorized
        // authorized: true
    });
}

module.exports = {
    httpGetApiKey
}