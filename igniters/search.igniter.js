import fetch from 'isomorphic-unfetch';

const { HOST } = require('../config');

export default async function searchIgniter(context) {
  const { q, limit, offset } = context.query;

  try {
    const url = `${HOST}/api/items?q=${q}${limit ? `&limit=${limit}` : ''}${
      offset ? `&offset=${offset}` : ''
    }`;

    const res = await fetch(url);

    if (res.status === 204) {
      return {
        items: []
      };
    }

    const data = await res.json();

    return {
      items: data.map(entry => entry)
    };
  } catch (error) {
    throw new Error('Bad response');
  }
}