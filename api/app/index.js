const path = require('path');
const express = require('express');
const app = express(); 
module.exports = app;


require('./config')(app);

app.use('/api', require('./routes'));


//error endware.

app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
});
