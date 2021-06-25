const router = require("express").Router();
const { User } = require('../../db/models')

router.get("/", (req, res, next) => {
    User.findAll().then((users) => res.json(users));
});

router.get("/:id", (req, res, next) => {
    User.findOne({
        where: {
            id: req.params.id,
        },
        include: "favoritos",
    }).then((user) => res.json(user));
});

module.exports = router;