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
    { props.items.length === 0 && (
      <div>
        Ningún resultado para la busqueda.
      </div>
    )}
  </Layout>
);

Item.getInitialProps = async function(context) {
  const { q, limit, offset } = context.query;

  try {
    const url = `${HOST}/api/items?q=${q}${limit ? '&limit=' + limit : ''}${offset ? '&offset=' + offset : ''}`;
    const res = await fetch(url);

    if (res.status === 204) {
      return {
        items: []
      }
    }

    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
      items: data.map(entry => entry)
    };
  } catch(error) {
    console.log(error);
    throw new Error("Bad response");
  }
};

export default Item;
