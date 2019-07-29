import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import Header from '../Header';
import CategoriesBreadcrumb from '../CategoriesBreadcrumb';

const Layout = ({ title, children }) => {
  return (
    <div className="display-only-when-normalized" style={{ display: 'none' }}>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/normalize.min.css" />
      </Head>
      <Header />
      <CategoriesBreadcrumb />
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
