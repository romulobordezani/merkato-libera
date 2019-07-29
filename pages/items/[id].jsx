import { useRouter } from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';

import { getItemIgniter } from '../../igniters';
import Layout from '../../components/Layout';
import ItemDetails from '../../components/ItemDetails';

const ItemShowRoom = ({ item }) => {
  const router = useRouter();
  return (
    <Layout title={item.title} grid="details">
      {item && <ItemDetails item={item} />}
      {!item && <div>Producto {router.query.id} no encontrado.</div>}
    </Layout>
  );
};

ItemShowRoom.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

ItemShowRoom.getInitialProps = getItemIgniter;

export default ItemShowRoom;
