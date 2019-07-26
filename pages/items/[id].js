import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout/Layout.js';

const { HOST } = require('../../config');

const ItemShowRoom = ({ item }) => {

  if (!item) {
    return (
      <Layout>
        Producto no encontrado;
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>{item.title}</h1>
      <p>{item.id}</p>
      <p>${item.price}</p>
    </Layout>
  )
};

ItemShowRoom.getInitialProps = async function(context) {
  const { id } = context.query;

  try {
    const res = await fetch(`${HOST}/api/items/${id}`);

    if (res.status === 404) {
      return {
        item: null
      }
    }

    const item = await res.json();
    console.log(`Fetched item details: ${item.id}`);
    return { item };

  } catch(error) {
    console.log(error);
    throw new Error("Bad response");
  }
};

export default ItemShowRoom;
