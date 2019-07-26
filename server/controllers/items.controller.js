const fetch = require('isomorphic-unfetch');
const { MELI_API } = require('../../config');

async function queryItems(req, res){
  const { q } = req.query;
  const meliAPIres = await fetch(`${MELI_API}/sites/MLA/search?q=${q}`);
  const data = await meliAPIres.json();
  return res.json(data.results);
}

async function getItem(req, res) {
  const { id } = req.params;
  const meliAPIres = await fetch(`${MELI_API}/items/${id}`);
  const data = await meliAPIres.json();
  return res.json(data);
}

module.exports = {
  getItem,
  queryItems
};
