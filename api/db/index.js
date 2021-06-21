const db = require("./db");
const chalk = require("chalk");

require("./models");

var syncedDbPromise = db.sync({force:false});

syncedDbPromise.then(function () {
    console.log(chalk.green("Sequelize models synced to PostgreSQL\n"));
});

module.exports = syncedDbPromise;
