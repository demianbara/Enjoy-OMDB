const router = require("express").Router();
const passport = require(`passport`);
const { Favorite, User } = require('../../db/models')

router.post('/add',(req,res,next) => {
    Favorite.create(req.body)
        .then((favorite) => {
        favorite.setUser(req.user.dataValues.id);
        return favorite
        })
        .then((favorite) => res.status(201).json(favorite))
        .catch(next);
})

router.get('/get', (req,res,next) => {
    Favorite.findAll({
        where: {
            UserId: req.user.dataValues.id,
        },
    }).then((favorites) => res.json(favorites));
})

module.exports = router;