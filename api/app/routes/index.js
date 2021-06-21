const router = require("express").Router();
const { User } = require('../../db/models')


router.get('/', (req, res) => {
    res.json({message: "hola"})
})

router.post('/register', (req, res, next) => {
    User.create(req.body)
      .then((user) => {res.status(201).json(user)})
      .catch(next)

})

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;