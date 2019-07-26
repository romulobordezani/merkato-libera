const fetch = require('isomorphic-unfetch');
const { MELI_API, MELI_SITE } = require('../../config');

async function queryItems(req, res){
  const { q } = req.query;

  try {
    const meliAPIres = await fetch(`${MELI_API}/sites/${MELI_SITE}/search?q=${q}`);
    const data = await meliAPIres.json();

    if (!data.results.length) {
      return res.sendStatus(204).end();
    }

    return res.json(data.results);
  } catch (error) {
    return res.status(500).json( error );
  }
}

async function getItem(req, res) {
  const { id } = req.params;

  try {
    const meliAPIres = await fetch(`${MELI_API}/items/${id}`);
    const data = await meliAPIres.json();

    if (meliAPIres.status === 404) {
      return res.sendStatus(404).end();
    }

    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json( error );
  }
}

module.exports = {
  getItem,
  queryItems
};
