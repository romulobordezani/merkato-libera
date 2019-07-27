import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export default async function searchIgniter(context) {
  const { q, limit, offset } = context.query;

  try {
    console.log('Aqui', API_URL);
    const url = `${API_URL}/api/items?q=${q}${limit ? `&limit=${limit}` : ''}${
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
    throw new Error(error);
  }
}
