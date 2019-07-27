import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

async function envIgniter() {
  try {
    return { API_URL };
  } catch (error) {
    throw new Error(error);
  }
}

export default envIgniter;
