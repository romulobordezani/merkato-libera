import React from 'react';
import PropTypes from 'prop-types';

import styles from './CategoriesBreadcrumb.module.scss';

const CategoriesBreadcrumb = ({ item = null }) => {
  return (
    <div className={styles['categories-breadcrumb']}>
      <div className={styles['categories-breadcrumb_container']}>
        {item &&
          item.categories.map(category => (
            <span className={styles['categories-breadcrumb_item']}>{category}</span>
          ))}
        {!item && <span className={styles['categories-breadcrumb_item']}>&nbsp;</span>}
      </div>
    </div>
  );
};

CategoriesBreadcrumb.propTypes = {
  item: PropTypes.arrayOf({
    categories: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  })
};

export default CategoriesBreadcrumb;
