import Head from 'next/head';
import PropTypes from 'prop-types';

import Header from '../Header';
import grid from '../Grid/Grid.scss';

const Layout = ({ title, children }) => {
  return (
    <div className={`${grid.mainGrid}`}>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/normalize.min.css" />
      </Head>
      <Header />
      <div
        className={`${grid.contentBox} ${grid.displayOnlyWhenLoaded}`}
        style={{ display: 'none' }}
      >
        {children}
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
