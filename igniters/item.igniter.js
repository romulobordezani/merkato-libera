import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export default async function getItemIgniter(context) {
  const { id } = context.query;

  console.log('Acola', API_URL);

  try {
    const res = await fetch(`${API_URL}/api/items/${id}`);

    if (res.status === 404) {
      return {
        item: null
      };
    }

    const item = await res.json();
    return { item };
  } catch (error) {
    throw new Error(error);
  }
}
