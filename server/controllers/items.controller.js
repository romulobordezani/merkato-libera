const fetch = require('isomorphic-unfetch');
const { MELI_API } = require('../../config');

async function queryItems(req, res){
  const { q } = req.query;

  try {
    const meliAPIres = await fetch(`${MELI_API}/sites/MLA/search?q=${q}`);
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

    console.log(meliAPIres.status);

    if (meliAPIres.status === 404) {
      console.log(data);
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
