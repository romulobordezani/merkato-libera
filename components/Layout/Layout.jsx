import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className="display-only-when-normalized" style={{ display: 'none' }}>
      <Head>
        <title>Mercado Libre</title>
        <link rel="stylesheet" href="/styles/normalize.min.css" />
        {/* <!-- important to kee this meta noindex to avoid indexing of this test --> */}
        <meta name="robots" content="noindex" />
        <meta name="theme-color" content="#FFE600" />
      </Head>
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
