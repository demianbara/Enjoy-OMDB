"use strict";

const bodyParser = require("body-parser");
const volleyball = require('volleyball')
const cookieParser = require(`cookie-parser`); 

module.exports = function (app) {
    app.use(volleyball)
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cookieParser);
};
