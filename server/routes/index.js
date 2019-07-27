const express = require('express');
const router = express.Router();
const { getItem, queryItems } = require('../controllers');

router
  .get('/', queryItems)
  .get('/:id', getItem);

module.exports = router;
