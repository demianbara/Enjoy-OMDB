const { Model, DataTypes } = require('sequelize');
const db = require('../db');

class Favorite extends Model {};

Favorite.init({
    Poster: {
        type: DataTypes.TEXT
    },
    Title: {
        type: DataTypes.STRING
    },
    Type: {
        type: DataTypes.STRING
    },
    Year: {
        type: DataTypes.INTEGER
    }, 
    imdbID: {
        type: DataTypes.STRING
    }   
},{
    sequelize: db,
    timestamps: false,
    modelName: 'Favorite'
})

module.exports = Favorite;