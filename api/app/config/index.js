
module.exports = function (app) {
    require('./parsing&loggin')(app)
    require('./auth')(app)
}