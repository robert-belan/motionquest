const path = require('path');

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');

const { httpGetApiKey } = require('./routes/auth.controller');
const { httpScheduleInterview } = require('./routes/submit.controller');


const app = express();



app.use(helmet()); // Helmet middleware

app.use(cors({
    origin: 'https://localhost:3000'
}));

app.use(morgan("combined")); // HTTP request logger middleware

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public'))); // servers frontend to client


app.post('/auth', httpGetApiKey);

app.post('/submit', httpScheduleInterview);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


module.exports = app;
