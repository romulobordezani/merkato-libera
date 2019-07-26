import fetch from 'isomorphic-unfetch';

const { HOST } = require('../config');

export default async function getItemIgniter(context) {
  const { id } = context.query;

  try {
    const res = await fetch(`${HOST}/api/items/${id}`);

    if (res.status === 404) {
      return {
        item: null
      };
    }

    const item = await res.json();
    console.log(`Fetched item details: ${item.id}`);
    return { item };
  } catch (error) {
    console.log(error);
    throw new Error('Bad response');
  }
}
