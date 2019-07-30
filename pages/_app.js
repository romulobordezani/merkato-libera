import Head from 'next/head';
import React from 'react';
import App, { Container } from 'next/app';

/* Non used .scss loaded here due to a next.js bug while routing, please don't remove
 *  https://github.com/papasunnee/pret-app/commit/35cb10540d1062e39bea862411caf5f75885bac0
 */
import style from '../components/_SassLib/_colors.scss';

import Layout from '../components/Layout';

class MeliApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Mercado Libre</title>
          <link rel="stylesheet" href="/styles/normalize.min.css" />
          <link rel="stylesheet" href="/styles/global.css" />
          {/* <!-- important > keep this <meta name="robots" content="noindex" /> to avoid indexing of this test on production --> */}
          <meta name="robots" content="noindex" />
          <meta name="theme-color" content="#FFE600" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }

  componentDidCatch(error, errorInfo) {
    /*
     This adds awesome possibilities like:
     - Send errors to Google Analytics, Dinamyc Yeld, Omniture, Splunk|Kibana(with an Elastic Search middleware)
        or any other online error tracer, to see and keep on track when clients are facing client side issues
     */
    console.log('MELI CUSTOM ERROR HANDLING', error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('Service worker registration successful');
        })
        .catch(err => {
          console.warn('Service worker registration failed', err.message);
        });
    }
  }
}

export default MeliApp;
