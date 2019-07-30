import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import styles from './ItemDetails.scss';
import Price from '../Price';

const ItemDetails = ({ item }) => {
  return (
    <Fragment>
      <div className={styles.ItemDetails_imgBox}>
        <img src={item.picture} alt={item.title} />
      </div>

      <div className={styles.ItemDetails_infoBox}>
        <div className={styles.ItemDetails_infoBox_info}>
          {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendido
          {item.sold_quantity > 1 && 's'}
        </div>
        <div className={styles.ItemDetails_infoBox_title}>{item.title}</div>
        <Price item={item} fontSize="46px" />
        <a href={item.permalink} className={styles.ItemDetails_infoBox_buyButton}>
          Comprar
        </a>
      </div>

      <div className={styles.ItemDetails_descriptionBox}>
        <p className={styles.ItemDetails_descriptionBox_title}>Descripción del producto</p>
        <p className={styles.ItemDetails_descriptionBox_content}>{item.description}</p>
      </div>
    </Fragment>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemDetails;
