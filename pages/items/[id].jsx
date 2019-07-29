import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { getItemIgniter } from '../../igniters';
import ItemDetails from '../../components/ItemDetails';
import gridSystem from '../../components/_SassLib/Grid/Grid.scss';

const ItemShowRoom = ({ item }) => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>{item.title}</title>
        <meta property="og:image" content={item.picture} />

        <meta property="fb:app_id" content="253960718025486" />
        <meta property="og:title" content={item.title} />
        <meta property="og:type" content="meli-br:product" />
        <meta property="og:url" content={item.permalink} />

        <meta name="twitter:card" content="product" />
        <meta name="twitter:site" content="Mercado Libre" />
        <meta name="twitter:title" content={item.title} />
        <meta name="twitter:description" content={item.description} />
        <meta name="twitter:image" content={item.picture} />

        <meta name="twitter:app:name:iphone" content="Mercado Libre" />
        <meta name="twitter:app:id:iphone" content="463624852" />
        <meta name="twitter:app:url:iphone" content={`meli://item?id=${item.id}`} />

        <meta name="twitter:app:name:ipad" content="Mercado Libre" />
        <meta name="twitter:app:id:ipad" content="463624852" />
        <meta name="twitter:app:url:ipad" content={`meli://item?id=${item.id}`} />

        <meta name="twitter:app:name:googleplay" content="Mercado Libre" />
        <meta name="twitter:app:id:googleplay" content="com.mercadolibre" />
        <meta name="twitter:app:url:googleplay" content={`meli://item?id=${item.id}`} />
        <meta name="twitter:domain" content="mercadolivre.com.br" />
      </Head>
      <div className={`${gridSystem.detailsGrid}`}>
        <div className={`${gridSystem.detailsGrid_contentBox}`}>
          {item && <ItemDetails item={item} />}
          {!item && <div>Producto {router.query.id} no encontrado.</div>}
        </div>
      </div>
    </Fragment>
  );
};

ItemShowRoom.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

ItemShowRoom.getInitialProps = getItemIgniter;

export default ItemShowRoom;
