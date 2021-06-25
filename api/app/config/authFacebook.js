const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const {User} = require('../../db/models')

module.exports = function (app) {
    passport.use(new FacebookStrategy({
        clientID: 4086757774774778,
        clientSecret: 'e952f56248748ce70d4c85acb0f9db5c',
        callbackURL: "http://localhost:3000/api/auth/facebook/callback"
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