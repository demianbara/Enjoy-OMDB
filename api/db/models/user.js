const { Model, DataTypes } = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
    {
        email: {
            type: DataTypes.STRING,
            // validate: {
            //     isEmail: true,
            // },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salt: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: db,
        modelName: "User",
    }
);

User.beforeCreate((user) => {
    return bcrypt
        .genSalt(16)
        .then((salt) => {
            user.salt = salt;
            return user.hash(user.password, user.salt);
        })
        .then((hash) => {
            user.password = hash;
        });
});

User.prototype.hash = function (plainPass, salt) {
    return bcrypt.hash(plainPass, salt);
};

module.exports = User;
