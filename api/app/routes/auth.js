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

router.get('/', (req,res,next) => {
    User.findAll().then(user => { res.json(user);})
})

router.get('/login', passport.authenticate('local'), (req, res, next) => {
    console.log(req.user)
    res.json(req.user)
})


module.exports = router;
