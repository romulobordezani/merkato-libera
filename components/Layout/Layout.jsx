import Head from 'next/head';
import PropTypes from 'prop-types';

import Header from '../Header';
import style from './Layout.scss';

const Layout = ({ title, children }) => {
  return (
    <div className={style['main-layout']}>
      <Head>
        <title>{title}</title>
        <link rel="preload" href="styles/normalize.min.css" as="style"/>
      </Head>
      <Header />
      <div className={style['content-wrapper']}>{children}</div>
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
