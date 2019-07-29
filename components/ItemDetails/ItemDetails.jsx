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
          {item.condition} - {item.sold_quantity} vendidos
        </div>
        <div className={styles.ItemDetails_infoBox_title}>{item.title}</div>
        {item.free_shipping && <p>Frete: Gratis.</p>}
        <Price item={item} fontSize="46px" />
        <a href={item.permalink} className={styles.ItemDetails_infoBox_buyButton}>Comprar</a>
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