import React from 'react';
import PropTypes from 'prop-types';

import styles from './NoResults.scss';

const NoResults = () => {
  return (
    <div className={styles.NoResults}>
      <div className={styles.NoResults_icon}>
        <img src="/images/page-not-found.svg" alt="Not Found" />
      </div>
      <div className={styles.NoResults_message}>Ningún resultado para la busqueda.</div>
    </div>
  );
};

NoResults.propTypes = {
  item: PropTypes.object.isRequired
};

export default NoResults;
