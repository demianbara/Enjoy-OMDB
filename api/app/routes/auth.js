const router = require("express").Router();
const passport = require(`passport`);
const { User } = require('../../db/models')

router.post('/register', (req, res, next) => {
    User.create(req.body)
        .then((user) => {
            res.status(201).json(user);
        })
        .catch(next);
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
    res.json(req.user);
});

router.get("/logout", (req, res, next) => {
    req.logout();
    res.redirect("/");
});



module.exports = router;
