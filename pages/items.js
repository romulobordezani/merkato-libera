import React from "react";
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import { Layout } from '../components/Layout';

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

Item.getInitialProps = async function() {
    const res = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapato');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.results.length}`);

    return {
        items: data.results.map(entry => entry)
    };
};

export default Item;
