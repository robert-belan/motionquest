const { authenticateUser } = require('../services/authenticate');

async function httpGetApiKey (req, res) {
    const apiKey = req.body.apiKey;
    console.log('apiKey :>> ', apiKey);
    const isAuthorized = await authenticateUser(apiKey);

    return res.status(200).json({
        authorized: isAuthorized
    });
}

module.exports = {
    httpGetApiKey
}