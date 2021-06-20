"use strict";

const bodyParser = require("body-parser");
const volleyball = require('volleyball')

module.exports = function (app) {
    // Parse our POST and PUT bodies.
    app.use(volleyball)
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
};
