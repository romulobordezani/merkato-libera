import Head from 'next/head';
import PropTypes from 'prop-types';

import Header from '../Header';
import style from './Layout.scss';

const Layout = ({ title, children }) => {
  return (
    <div style={style.mainLayout}>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="styles/normalize.min.css" />
      </Head>
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
};

Layout.defaultProps = {
  title: 'Mercado Livre'
};

export default Layout;
