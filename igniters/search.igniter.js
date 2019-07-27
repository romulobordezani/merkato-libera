import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

async function searchIgniter(context) {
  const { q, limit, offset } = context.query;

  try {
    const url = `${API_URL}/api/items?q=${q}${limit ? `&limit=${limit}` : ''}${
      offset ? `&offset=${offset}` : ''
    }`;

    const res = await fetch(url);

    if (res.status === 204) {
      return {
        items: []
      };
    }

    const { items } = await res.json();

    return { items };
  } catch (error) {
    throw new Error(error);
  }
}

export default searchIgniter;
