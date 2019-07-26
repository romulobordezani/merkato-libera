const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ test: ' Hello World' });
});

router
    .get('/:id', (req, res) => {
        return res.json( { test: `ided one`} )
    });

module.exports = router;
