
module.exports = function (app) {
    require('./parsing&loggin')(app)
    require('./authentication')(app)
}