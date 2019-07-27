const fetch = require('isomorphic-unfetch');
const { logger } = require('../helpers');
const Author = require('../models/Author');
const Item = require('../models/Item');

const CONFIG = require('../../config');
const { MELI_API, MELI_SITE } = CONFIG();
const author = new Author();

async function queryItems(req, res){
  const { q, limit, offset } = req.query;

  try {
    const url = `${MELI_API}/sites/${MELI_SITE}/search?q=${q}${
      limit ? '&limit=' + limit : ''}${
      offset ? '&offset=' + offset : ''}`;

    const meliAPIres = await fetch(url);
    const data = await meliAPIres.json();

    if (!data.results.length) {
      return res.sendStatus(204).end();
    }

    const items = data.results.map(item => {
      const model = new Item(item);
      delete model.sold_quantity;
      return model;
    });

    // TODO - Categories - Tough one...
    const categories = data.filters; //data.filters[0].values[0].path_from_root;

    return res.json({
      author,
      categories,
      items
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json(error);
  }
}

module.exports = {
  queryItems
};
