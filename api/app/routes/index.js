const router = require("express").Router();
const { User } = require('../../db/models')

router.use('/auth', require('./auth'))
router.use('/users', require('./users'))
router.use('/favorite', require('./favorite'))


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;