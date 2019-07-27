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
          <img src={item.picture} alt={item.title} />
          <h1>{item.title}</h1>
          <p>Id: {item.id}</p>
          <p>Condition: {item.condition}</p>
          {item.free_shipping && <p>Frete: Gratis.</p>}
          <p>Vendidos: {item.sold_quantity}</p>
          <p>
            {item.price.currency}
            {item.price.amount}
            {item.price.decimals !== '' && ','}
            {item.price.decimals}
          </p>
          <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
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
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      decimals: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }).isRequired,
    free_shipping: PropTypes.bool.isRequired,
    picture: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sold_quantity: PropTypes.number.isRequired
  }).isRequired
};

ItemShowRoom.getInitialProps = getItemIgniter;

export default ItemShowRoom;
