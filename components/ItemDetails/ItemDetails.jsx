import PropTypes from 'prop-types';
import React, { Fragment} from 'react';
import styles from './ItemDetails.scss';


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
        <div className={styles.ItemDetails_infoBox_price}>
          {item.price.currency}
          {item.price.amount.toLocaleString('de-DE')}
          {item.price.decimals !== '' && ','}
          {item.price.decimals}
        </div>
        <a href className={styles.ItemDetails_infoBox_buyButton}>Comprar</a>
      </div>

      <div className={styles.ItemDetails_descriptionBox}>
        <p className={styles.ItemDetails_descriptionBox_title}>Descripción del producto</p>
        <p className={styles.ItemDetails_descriptionBox_content}>{item.description}</p>
      </div>
    </Fragment>
  );
};

ItemDetails.propTypes = {
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

export default ItemDetails;
