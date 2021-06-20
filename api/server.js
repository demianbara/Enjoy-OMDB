const chalk = require('chalk')

const startDb = require('./db')

const server = require("http").createServer();

const createApp = function () {
    let app = require('./app')
    server.on('request', app)
}

const startServer = function () {
    let PORT = 1337

    server.listen(PORT, () => {
        console.log(chalk.magenta('Server listen on port', chalk.blue(PORT)))
    })
}


startDb
.then(createApp)
.then(startServer)
.catch(err => {
    console.error(chalk.red(err.stack))
    process.exit(1);
})