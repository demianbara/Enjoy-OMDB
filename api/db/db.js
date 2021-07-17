const Sequelize = require("sequelize");
const chalk = require('chalk')

console.log(chalk.yellow("\nOpening connection to PostgreSQL"));

const db = new Sequelize("postgres://postgres@localhost:5432/omdb", {
    logging: false,
});

module.exports = db;
