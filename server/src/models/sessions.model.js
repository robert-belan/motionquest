const db = []; // simulates sessions database, where access tokens are saved

function saveSession(user) {
    db.push(user);
}

function getUserById(id) {
    return db.filter(user => user.userId === id)[0]; 
}

module.exports = {
    saveSession,
    getUserById
};