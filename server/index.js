const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const NextApp = next({ dev });
const handle = NextApp.getRequestHandler();

NextApp.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use('/api/items', require('./routes/items'));

    // Handles all next + React Stuff not matched by Express routes
    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(port, err => {
        if (err) {
            throw err;
        }

        console.log(`Express app available on http://localhost:${port}`)
    })
});
