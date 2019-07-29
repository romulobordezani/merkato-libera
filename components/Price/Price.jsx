import React from 'react';
import PropTypes from 'prop-types';

import styles from './Price.scss';

const Price = ({ fontSize, item }) => {
  const { price } = item;
  return (
    <span className={styles.price} style={{ fontSize }}>
      <span className={styles.price_currency}>{price.currency}</span>
      <span className={styles.price_amount}>{price.amount.toLocaleString('de-DE')}</span>
      <span className={styles.price_decimals}>{price.decimals}</span>
    </span>
  );
};

Price.propTypes = {
  fontSize: PropTypes.string,
  item: PropTypes.object.isRequired
};

Price.defaultProps = {
  fontSize: '36px'
};

export default Price;
