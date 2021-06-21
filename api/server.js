const chalk = require('chalk')

const startDb = require('./db')

const server = require("http").createServer();

const createApp = function () {
    const app = require('./app')
    server.on('request', app)
}

const startServer = function () {
    const PORT = 3001

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