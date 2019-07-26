const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const path = require('path');

const { PORT, dev } = require('../config');
const NextApp = next({ dev });
const handle = NextApp.getRequestHandler();

NextApp.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use('/api/items', require('./routes/items.routes'));
  server.use(serveStatic(path.resolve('./static')));

  // Handles all next + React Stuff not matched by Express routes
  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, err => {
    if (err) {
      throw err;
    }
    console.log(`Express app available on http://localhost:${PORT}`)
  });

});
