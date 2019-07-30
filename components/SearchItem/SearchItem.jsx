import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './SearchItem.scss';
import Price from '../Price';
import ShippingBadge from '../ShippingBadge';

const SearchItem = ({ item }) => {
  return (
    <Link href="/items/[id]" as={`/items/${item.id}`}>
      <div className={styles.SearchItem}>
        <div className={styles.SearchItem_picture}>
          <img src={item.picture} alt={item.title} />
        </div>
        <div className={styles.SearchItem_info}>
          <Price item={item} fontSize="24px" />
          <ShippingBadge item={item} />
          <div className={styles.SearchItem_info_title}>{item.title}</div>
        </div>
        <div className={styles.SearchItem_city}>{item.city}</div>
      </div>
    </Link>
  );
};

SearchItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default SearchItem;
