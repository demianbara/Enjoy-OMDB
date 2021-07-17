const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const {User} = require('../../db/models')

module.exports = function (app) {
    passport.use(new FacebookStrategy({
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: process.env.callbackURL,
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOrCreate({
            where: {
                email: profile.email[0].value
            }
        }).then(user => done(null,user))
        .catch(done)
        
    }
    ));
}