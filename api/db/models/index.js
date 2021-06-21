const User = require('./user');
const Favorite = require('./favorite')

User.hasMany(Favorite, { as: "favoritos" });
Favorite.belongsTo(User)

module.exports = {User, Favorite}