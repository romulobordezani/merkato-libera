const express = require('express');
const router = express.Router();
const controllers = require('../controllers/items.controller');

router
  .get('/', controllers.queryItems)
  .get('/:id', controllers.getItem);

module.exports = router;
