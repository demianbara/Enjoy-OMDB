const router = require("express").Router();
const { Favorite } = require("../../db/models");

router.post("/add", async (req, res, next) => {
    const { Title, Year, imdbID, Type, Poster } = req.body;
    const [favorite, created] = await Favorite.findOrCreate({
        where: { imdbID: imdbID },
        defaults: {
            Title,
            Year,
            Type,
            Poster,
        },
    });
    if (created) favorite.setUser(req.user.dataValues.id);
    res.status(201).json(favorite);
});

router.delete("/remove", (req, res, next) => {
    Favorite.destroy({
        where: {
            imdbID: req.query.id,
        },
    })
        .then(() => res.status(204).send("ok"))
        .catch(next);
});

router.get("/get", (req, res, next) => {
    Favorite.findAll({
        where: {
            UserId: req.user.dataValues.id,
        },
    })
        .then((favorites) => res.json(favorites))
        .catch(next);
});

module.exports = router;
