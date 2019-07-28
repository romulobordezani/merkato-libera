import Head from 'next/head';
import PropTypes from 'prop-types';

import Header from '../Header';
import grid from '../_SassLib/Grid/Grid.scss';
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
      <div className={`${grid.mainGrid}`}>
        <div className={`${grid.contentBox}`}>{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

Layout.defaultProps = {
  title: 'Mercado Livre'
};

export default Layout;
