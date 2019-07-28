import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './SearchItem.scss';

const SearchItem = ({ item }) => {
  return (
    <Link href="/items/[id]" as={`/items/${item.id}`}>
      <div className={styles.SearchItem}>

        <div className={styles.SearchItem__col_1}>
          <img src={item.picture} alt={item.title} />
        </div>

        <div className={styles.SearchItem__col_2}>
          <div>
            {item.price.currency}{' '}
            {item.price.amount}
            {item.price.decimals !== '' && ','}
            {item.price.decimals}
          </div>
          <div>{item.title}</div>
        </div>

        <div className={styles.SearchItem__col_3}>City</div>
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
    condition: PropTypes.string.isRequired
  }).isRequired
};

export default SearchItem;
