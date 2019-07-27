const fetch = require('isomorphic-unfetch');
const { logger } = require('../helpers');
const Author = require('../models/Author');
const Item = require('../models/Item');

const CONFIG = require('../../config');
const { MELI_API, MELI_SITE } = CONFIG();

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

    logger.debug(`API used to query > ${url}, got ${data.results.length} results.`);

    return res.json({
      author,
      items: data.results
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json(error);
  }
}

async function getItem(req, res) {
  const { id } = req.params;

  try {
    const url = `${MELI_API}/items/${id}`;
    const meliAPIres = await fetch(url);
    const data = await meliAPIres.json();

    if (meliAPIres.status === 404) {
      logger.debug(`API could not find product with id: ${id}`);
      return res.sendStatus(404).end();
    }

    logger.debug(`API used to get Item Id: ${id}`);

    const author = new Author();
    const item = new Item(data);

    return res.json({
      author,
      item
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json( error );
  }
}

module.exports = {
  getItem,
  queryItems
};
