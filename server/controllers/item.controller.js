const fetch = require('isomorphic-unfetch');
const { logger } = require('../helpers');
const Author = require('../models/Author');
const Item = require('../models/Item');

const CONFIG = require('../../config');
const { MELI_API } = CONFIG();
const author = new Author();

async function getItem(req, res) {
  const { id } = req.params;

  try {
    const url = `${MELI_API}/items/${id}`;

    // Gets general Info
    const meliAPIres = await fetch(url);
    const data = await meliAPIres.json();

    if (meliAPIres.status === 404) {
      logger.debug(`API could not find product with id: ${id}`);
      return res.sendStatus(404).end();
    }

    // Gets Description, but only if product exists
    const meliAPIresForDescription = await fetch(`${url}/description`);
    const description = await meliAPIresForDescription.json();

    // Gets the Category Breadcrumb
    const meliAPIresForCategory = await fetch(`${MELI_API}/categories/${data.category_id}`);
    const category = await meliAPIresForCategory.json();

    const item = new Item(data);

    // Adds Description to item
    item.description = description.plain_text;
    item.categories = category.path_from_root.map(category => category.name);

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
  getItem
};
