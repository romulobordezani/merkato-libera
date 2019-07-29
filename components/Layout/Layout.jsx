import Head from 'next/head';
import PropTypes from 'prop-types';

import Header from '../Header';
import gridSystem from '../_SassLib/Grid/Grid.scss';
import CategoriesBreadcrumb from '../CategoriesBreadcrumb';

const Layout = ({ title, children, grid }) => {
  return (
    <div className="display-only-when-normalized" style={{ display: 'none' }}>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/normalize.min.css" />
      </Head>
      <Header />
      <CategoriesBreadcrumb />
      <div className={`${gridSystem[`${grid}Grid`]}`}>
        <div className={`${gridSystem[`${grid}Grid_contentBox`]}`}>{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  grid: PropTypes.string
};

Layout.defaultProps = {
  title: 'Mercado Livre',
  grid: 'main'
};

export default Layout;
