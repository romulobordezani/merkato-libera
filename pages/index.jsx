import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import { envIgniter } from '../igniters';

const Index = () => {
  return (
    <Layout>
      <Fragment />
    </Layout>
  );
};

Index.getInitialProps = envIgniter;

export default Index;
