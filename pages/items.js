import React from "react";
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import { Layout } from '../components/Layout';

const { HOST } = require('../config');

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
  </Layout>
);

Item.getInitialProps = async function(context) {
  const { q } = context.query;
  const res = await fetch(`${HOST}/api/items?q=${q}`);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    items: data.map(entry => entry)
  };
};

export default Item;
