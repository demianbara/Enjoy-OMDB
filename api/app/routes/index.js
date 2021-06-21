const router = require("express").Router();

router.use('/auth', require('./auth'))
router.use('/users', require('./users'))
router.use('/favorite', require('./favorite'))


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;