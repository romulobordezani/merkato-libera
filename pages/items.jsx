import Link from 'next/link';
import PropTypes from 'prop-types';

import { searchIgniter } from '../igniters';
import Layout from '../components/Layout';

const Item = props => (
  <Layout>
    <h1>Mercado Livre Items:</h1>
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          <Link href="/items/[id]" as={`/items/${item.id}`}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    {props.items.length === 0 && <div>Ningún resultado para la busqueda.</div>}
  </Layout>
);

Item.propTypes = {
  items: PropTypes.array.isRequired
};

Item.getInitialProps = searchIgniter;

export default Item;
