import PropTypes from 'prop-types';
import React from 'react';
import { searchIgniter } from '../igniters';
import Layout from '../components/Layout';
import SearchItem from '../components/SearchItem';

const Item = props => (
  <Layout>
    {props.items.map(item => (
      <SearchItem item={item} key={item.id} />
    ))}
    {props.items.length === 0 && <div>Ningún resultado para la busqueda.</div>}
  </Layout>
);

Item.propTypes = {
  items: PropTypes.array.isRequired
};

Item.getInitialProps = searchIgniter;

export default Item;
