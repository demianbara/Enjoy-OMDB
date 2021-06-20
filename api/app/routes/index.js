'use strict';

const router = require("express").Router();
module.exports = router;

router.get('/', (req, res) => {
    res.send('ok')
})

router.use((req, res) => {
    res.status(404).end();
});