const express = require('express');
const router = express.Router();

router
    .get('/', (req, res) => {
        return res.json({ test: ' Hello World' });
    })

    .get('/:id', (req, res) => {
        return res.json({ test: `id one`});
    });

module.exports = router;
