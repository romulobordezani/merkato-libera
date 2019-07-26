import Head from 'next/head'

import { Header } from '../Header';
import style from './Layout.scss';

const Layout = props => {
  const title = props.title || 'Mercado Livre';

  return (
    <div style={style.mainLayout}>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="styles/normalize.min.css" />
      </Head>
      <Header />
      {props.children}
    </div>
  )
};

// TODO - Missing some PropTypes Here...

export default Layout;
