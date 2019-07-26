import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';

const { HOST } = require('../../config');

const ItemShowRoom = ({ item }) => {
  const router = useRouter();

  return (
    <Layout title={item.title}>
      {item && (
        <div>
          <h1>{item.title}</h1>
          <p>{item.id}</p>
          <p>${item.price}</p>
        </div>
      )}

      {!item && <div>Producto {router.query.id} no encontrado.</div>}
    </Layout>
  );
};

ItemShowRoom.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired
};

ItemShowRoom.getInitialProps = async function getItemIgniter(context) {
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
};

export default ItemShowRoom;
