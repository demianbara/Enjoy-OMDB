"use strict";

const bodyParser = require("body-parser");
const volleyball = require('volleyball')
const cookieParser = require(`cookie-parser`); 
const cors = require("cors");

module.exports = function (app) {
    app.use(cors())
    app.use(volleyball)
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cookieParser());
};
