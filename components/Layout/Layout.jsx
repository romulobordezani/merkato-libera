import PropTypes from 'prop-types';
import React from 'react';

import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className="display-only-when-normalized" style={{ display: 'none' }}>
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

Layout.defaultProps = {
  title: 'Mercado Libre'
};

export default Layout;
