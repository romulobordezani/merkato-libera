import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { getItemIgniter } from '../../igniters';
import Layout from '../../components/Layout';

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

ItemShowRoom.getInitialProps = getItemIgniter;

export default ItemShowRoom;
