import React from 'react';
import App, { Container } from 'next/app';

import style from '../components/_SassLib/_colors.scss';
import Layout from '../components/Layout';

class MeliApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
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
}

export default MeliApp;
