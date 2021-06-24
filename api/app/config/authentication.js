const session = require(`express-session`);
const passport = require(`passport`);
const { User } = require("../../db/models");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (app) {
    app.use(session({ secret: "omdb", resave: true, saveUninitialized: true }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(
        new LocalStrategy(
            {
                usernameField: "email",
                passwordField: "password",
            },
            (email, password, done) => {
                User.findOne({
                    where: { email: email },
                })
                    .then((user) => {
                        if (!user) {
                            return done(null, false, {
                                message: "Incorrect email or password",
                            });
                        }
                        user.hash(password, user.salt).then((hash) => {
                            if (hash !== user.password) {
                                return done(null, false, {
                                    message: "Incorrect email or password",
                                });
                            }
                            done(null, user);
                        });
                    })
                    .catch(done);
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findByPk(id).then((user) => done(null, user));
    });
};
