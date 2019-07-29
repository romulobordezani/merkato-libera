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

    async function addsBetterPicture() {
      const promises = items.map(async item => {
        const url = `${MELI_API}/items/${item.id}`;
        const meliAPIres = await fetch(url);
        const data = await meliAPIres.json();
        item.picture = data.pictures[0].secure_url;
      });

      await Promise.all(promises);
    }

    const items = data.results.map(item => {
      const model = new Item(item);
      model.city = item.seller_address.city.name;
      model.freeShipping = item.shipping.free_shipping;
      delete model.sold_quantity;
      return model;
    });

    await addsBetterPicture();

    // TODO - Categories - Tough one...
    const categories = data.filters; //data.filters[0].values[0].path_from_root;

    return res.json({
      author,
      categories,
      items,
      data
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json(error);
  }
}

module.exports = {
  queryItems
};
