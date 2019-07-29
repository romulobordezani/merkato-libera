import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './SearchItem.scss';
import { getItemIgniter } from '../../igniters';

const SearchItem = ({ item }) => {
  return (
    <Link href="/items/[id]" as={`/items/${item.id}`}>
      <div className={styles.SearchItem}>
        <div className={styles.SearchItem_col_1}>
          <div className={styles.SearchItem_picture}>
            <img src={item.picture} alt={item.title} />
          </div>
        </div>

        <div className={styles.SearchItem_col_2}>
          <div className={styles.SearchItem_price}>
            <span className={styles.SearchItem_price_currency}>{item.price.currency} </span>
            {item.price.amount.toLocaleString('de-DE')}
            {item.price.decimals !== '' && ','}
            {item.price.decimals}
            {item.freeShipping && (
              <span className={styles.SearchItem_freeShipping}>
                <img src="/images/ic_shipping.png" alt="Free Shipping" />
              </span>
            )}
          </div>
          <div className={styles.SearchItem_title}>{item.title}</div>
        </div>

        <div className={styles.SearchItem_col_3}>
          <div className={styles.SearchItem_city}>{item.city}</div>
        </div>
      </div>
    </Link>
  );
};

SearchItem.propTypes = {
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
    city: PropTypes.string.isRequired,
    freeShipping: PropTypes.string.isRequired
  }).isRequired
};

SearchItem.getInitialProps = getItemIgniter;

export default SearchItem;
