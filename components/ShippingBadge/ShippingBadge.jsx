import React from 'react';
import PropTypes from 'prop-types';

import styles from './ShippingBadge.module.scss';

const ShippingBadge = ({ item }) => {
  const { freeShipping } = item;

  if (!freeShipping) {
    return null;
  }

  return (
    <span className={styles.ShippingBadge}>
      <img src="/images/ic_shipping.png" alt="Free Shipping" />
    </span>
  );
};

ShippingBadge.propTypes = {
  item: PropTypes.object.isRequired
};

export default ShippingBadge;
