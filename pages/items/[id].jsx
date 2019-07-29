import { useRouter } from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';

import { getItemIgniter } from '../../igniters';
import ItemDetails from '../../components/ItemDetails';
import gridSystem from '../../components/_SassLib/Grid/Grid.scss';

const ItemShowRoom = ({ item }) => {
  const router = useRouter();

  return (
    <div className={`${gridSystem.detailsGrid}`}>
      <div className={`${gridSystem.detailsGrid_contentBox}`}>
        {item && <ItemDetails item={item} />}
        {!item && <div>Producto {router.query.id} no encontrado.</div>}
      </div>
    </div>
  );
};

ItemShowRoom.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

ItemShowRoom.getInitialProps = getItemIgniter;

export default ItemShowRoom;
